import Tour from './Tour.jsx'
import { useState } from 'react'
function Tours (prop){
  const data = prop.tours
    return(
        <div className='tours'>
       {data.map(tourData => {
        return(
          <Tour tourData={tourData} key={tourData.id} removeTour={prop.removeTour} />
        )
       })}
      </div>
    )
}

export default Tours