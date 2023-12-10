
// import { API_KEY } from "../constant/constant.js";
// import React from "react";
import { API_URL } from "./constant/constant.js";
import { useState, useEffect } from "react";

import React from 'react'

const App = () => {

  const [news, setNews] = useState(null);
  const [choice,setChoice]=useState("india");

  const fetchnews = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${choice}&from=2023-11-10&sortBy=publishedAt&apiKey=52b3d39116bd43a7887f8552ac96c944`);
      const result = await response.json();
      setNews(result.articles);
      
    } catch (error) {
      console.log(error, "accured")
    }
  }

  useEffect(() => {
    fetchnews();

  },news)

  const handlechange=(e)=>{
    setChoice(e.target.value);
    console.log(choice);
  }


  return (
    <>
      <div className="text-center p-2">
              <h1 className="bg-gray-200 font-extrabold font-serif text-4xl my-2 text-center">INFO WHICH MATTERS!!!</h1>
              <input onChange={handlechange} type="text" className="text-center bg-blue-200 rounded-xl font-bold text-black" placeholder="enter-choice"  value={choice}/>

      </div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
      {
        news && news.map((item, i) => {
          return (
          
          <div className="sm:grid-cols-2 lg:grid-cols-3" key={i}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={item.urlToImage} alt="img" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"></div>
                <p className=" text-base">
                  {item.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a href={item.url} className="inline-block bg-blue-200 hover:bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">read-more</a>
              </div>
            </div>
          </div>
         
          )
        })
      }
      </ul>
    </>
  )



}

export default App


