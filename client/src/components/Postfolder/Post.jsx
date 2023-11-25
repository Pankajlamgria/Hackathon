import React from 'react'
import './Post.scss'    
const Post = (props) => {
    {console.log("posted");}
    return (
    <div className='postcover'> 
       <div className='username'>Post By : {props.postdetails.username}</div>
        <div className='imgcover' style={{color:"white"}}> 
            <img src={props.postdetails.docurl1}/>
      </div>
      <div className='posttag'></div>
    </div>
  )
}

export default Post
