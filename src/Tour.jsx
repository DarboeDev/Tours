import { useState, useEffect } from "react"


function Tour(prop){
    const cardData = prop.tourData
    const id = prop.tourData.id
    const [readMore, setReadMore] = useState(false)
 
    function toggle(){
        setReadMore(prevRead => !prevRead)
    }
    return(
        <div className="tourCard">
            <div className="imageSection">
                <img className="image" src={cardData.image} alt="" />
                <p className="price">${cardData.price}</p>
            </div>
            <div className="text">
                <h3 className="name">{cardData.name}</h3>
               { readMore ? <p className="info">
                    {cardData.info}...
                    <button onClick={toggle} className="read">Show less</button>
                </p> : <p> {cardData.info.substring(0,200)}...
                <button onClick={toggle} className="read">Read more</button>
               </p>}
                <button onClick={()=> prop.removeTour(id)} className="btn">Not Interested</button>
            </div>
        </div>
    )
}

export default Tour