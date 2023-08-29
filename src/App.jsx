import { useState, useEffect } from 'react'
import './App.css'
import Tours from './Tours.jsx'
import Header from './Header.jsx'
import Loading from './Loading'
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
 

  const removeTour =(id)=>{
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(()=>{
    setLoading(true)
    fetch(url)
    .then(res => res.json())
    .then(data => setTours(data)
    )

    setLoading(false)
  }, [])
  
console.log(tours);

if (tours.length === 0) {
  return (
    <main>
      <div className='title'>
        <h2>No tours left</h2>
        <button className='btn'>
          refresh
        </button>
      </div>
    </main>
  )
}
if (loading === true) {
  return (
    <main>
      <Loading />
    </main>
  )
}else {
  return (
    
   <div className="container">
       <Header/>
     <Tours 
 tours={tours} 
 removeTour={removeTour}
 />
   </div>
  )
}}

export default App
