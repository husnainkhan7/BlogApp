import React,{ useState,useEffect }from "react";
import App from "../App";
import style from "../style.css"

export default function CreateBlogTextArea({updatelist,list})
{
    let buttonCheck=false
    let blogTitle
    let blogDesc
    useEffect(()=>
    {
        console.log("inside child componenet")
      console.log(list)
    },[])
    let addBlog=()=>{

        if(blogTitle==null)
        {
            alert("Please enter Title");
            return
        }
        if(blogDesc==null)
        {
            alert("Please enter blog description");
            return
        }
        if(buttonCheck==true)
        {
            let obj= {
                id: 3,
                title: blogTitle,
                description: blogDesc,

            }
            //console.log(list)
            updatelist([...list,obj]);
            //console.log(list)
            
        }
        
      }

      let submitBlog=()=>{
          buttonCheck=true
          addBlog()
      }

      let getBlogTitle=(e)=>{
        blogTitle=e.target.value
      }

      let getBlogDesc=(e)=>{
        blogDesc=e.target.value
      }
    return(
        <div>
            <h2>Please Enter blog title</h2>
            <input
        type="text"
        onChange={getBlogTitle}
      />
            <h2>Please write your blog</h2>
            <textarea
        type="text"
        rows="10" cols="100"
        onChange={getBlogDesc}
       ></textarea>
       <br></br>
            <button onClick={submitBlog}>Submit Blog</button>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}