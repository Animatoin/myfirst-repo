import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Rowpost from './Components/Rowpost/Rowpost'
import  categories from './Constants/urls'

function App() {
  const {originals,action,tranding,animation,adventure,comedy,crime,fantasy,horror,mystery}=categories
  return (
    <div>
      <Navbar />
      <Banner/>
      <Rowpost title="Originals" url={originals}/>
      <Rowpost title="Tranding" url={tranding}/>
      <Rowpost title="Action" url={action}/>
      <Rowpost title="Animation" url={animation}/>
      <Rowpost title="Comedy" url={comedy}/>
      <Rowpost title="Crime" url={crime}/>
      <Rowpost title="Fantasy" url={fantasy}/>
      <Rowpost title="Horror" url={horror}/>
      <Rowpost title="Mystery" url={mystery}/>
      <Rowpost title="Adventure" url={adventure}/>

    </div>
  )
}

export default App