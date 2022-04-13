import React, { useEffect, useState } from 'react';
import Navbaar from './components/Navbar';
import Card from './components/Card';
import CreateBlogTextArea from './components/CreateBlogTextArea';
import { Button } from 'react-bootstrap';

export const info= [
  {
      id: 1,
      title: "Life Lessons with Katie Zaferes",
      description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
  },
  {
      id: 2,
      title: "Learn Wedding Photography",
      description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
  },
  {
      id: 3,
      title: "Group Mountain Biking",
      description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
  }
]

export default function App() {

  let[list,updatelist]=useState(info)
  let cards
  useEffect(()=>{
   console.log("123")
   console.log(list)
  },[list])

  cards = list.map((item,index) => {
    
    return (
      
        <>
        <br></br>
        <br></br>
         <Card key={[item.id]}{...item}/>
         <Button variant="outline-danger" onClick={() => deleteBlogwithID(item.id)}>Remove</Button>
         <br></br>
         <br></br>
         </>
    )
})  
  let deleteBlogwithID=(id)=>{
    updatelist(list.filter(items=>items.id!=id))
  }
  return (
   <>
   <Navbaar blogList={list}/>
   
   <section className="cards-list">
   <CreateBlogTextArea  updatelist={updatelist} list={list}/>
               { cards}
    </section>
   
   </>
  );
}

