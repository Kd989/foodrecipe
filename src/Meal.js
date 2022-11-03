import React, { useState } from 'react'
import Mealitem from './component/Mealitem'
import "./meal.css"
const Meal = () => {
  const [search, setSearch] = useState();
  const [Mymeal, setMeal] = useState();
  const searchMeal = (evt) => {
    //  evt.key =="enter" ? console.log("hello") 
    // (evt.key ==="Enter") ? console.log("hello") : console.log("not found");
    if (evt.key === "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => res.json())
      .then(data => {
        setMeal(data.meals)
      })
    }
  }
  return (
    <div className='main'>
      <div className='heading'>
        <h1>Search Your Food Recipe</h1>
        <h4>Get every recipe in one search</h4>
      </div>
      <div className='searchBox'>
        <input type="search" className='search-bar' placeholder='Enter food name' onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal}></input>
      </div>
      <div className='container'>
        {
          (Mymeal == null) ? <p className='notfound'> not found</p> : Mymeal.map((res) => {
            return(
              <Mealitem data={res}/>

            )
          })
        }


      </div>
    </div>
  )
}

export default Meal
