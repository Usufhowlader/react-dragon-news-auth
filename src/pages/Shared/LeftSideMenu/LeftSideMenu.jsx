import { useEffect, useState } from "react";
import LeftSide from "../LeftSide/LeftSide";



const LeftSideMenu = () => {
const [abcNews,setAbcNews]=useState([])
  useEffect(()=>{
    fetch('news.json')
    .then(res=>res.json())
    .then(data=>setAbcNews(data))
  },[])
    return (
        <div className="space-y-2 mt-4">
            {
                abcNews.map(leftSide=><LeftSide key={leftSide.id} leftSide={leftSide}></LeftSide>)
            }
        </div>
    );
};

export default LeftSideMenu;