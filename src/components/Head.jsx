
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
      
    useEffect(() => {
    
          

          const timer = setTimeout( () => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestion();
            }
            
        }, 200 );

          return () => {
            clearTimeout(timer);
          };

    },[searchQuery])

    const getSearchSuggestion = async () =>{
        console.log( "API CALL " + searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json();
        setSuggestions(json[1]);
        // console.log(json);

        dispatch(
            cacheResults({
            [searchQuery]: json[1]
        }));
    };

    
    
    const toggleMenuHandler = () => {
          dispatch(toggleMenu());
    };

    return(
        <div className="grid grid-flow-col p-2 shadow-md">
            <div className="flex col-span-1">
                <img 
                onClick={() => toggleMenuHandler()}
                className="h-10 m-5 cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCDuObAFhBONAysts8pNQ3H2WJFb36z5A-w7W3Y_lWw&s" 
                alt="menu" />
                <a href="http:/" rel="noopener noreferrer">
                <img
                className=" h-10  m-5 "
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOVE3Ur_m_NxWW_g9QeSHjJR-9Z1KToTtReSNi-lEK&s" 
                 alt="logo" />
                 </a>
            </div>

            <div className="col-span-10 ml-20 mt-4 mb-6 ">
                <div>
                <input type="text"
                 className=" w-1/2 border border-gray-400 p-2 rounded-l-full" placeholder="search"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 onFocus={() => setShowSuggestions(true)}
                 onBlur={() => setShowSuggestions(false)}/>
                <button className="  border border-gray-400 p-2 rounded-r-full  px-5 "> 
                <img 
                className="h-8"
                src="https://cdn.vectorstock.com/i/500p/50/71/basic-magnifying-glass-icon-search-symbol-vector-30695071.jpg" 
                alt="search" />
                </button>
                </div>


                  {showSuggestions &&(
                         <div className=" absolute bg-white py-2  px-2 w-[32rem] shadow-lg rounded-lg border-gray-100">
                         <ul>
                             {suggestions.map((s) => (
                             
                             <li key={s} className=" py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {s}</li>
                         ))}
                         </ul>
                         </div>
                  )}
                
                
                </div>
                <div className="col-span-1">
                <img 
                className="h-10 m-5 "
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                 alt="user" />
            </div>
        </div>
    )
}

export default Head;