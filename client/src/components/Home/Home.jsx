import { Link } from 'react-router-dom'
import './Home.scss'
import { useState, useEffect, useContext } from 'react'
import Loader from 'react-loaders'
import Uppernav from '../Uppernav/uppernav'
import letztalkcontext from '../../context/Letztalkcontext';
import Post from '../Postfolder/Post'

const Home = () => {
  const contextcontent=useContext(letztalkcontext);
  useEffect(()=>{
    contextcontent.showHomecontents();
    console.log("function running");
  },[])
  return (
    <>
      <div className="container home-page">
        <Uppernav/>
        <div className='contententscover'>
          {contextcontent.homedata.map((details)=>{
          return <Post key={details.id} postdetails={details}></Post>    
        })}
        </div>
      </div>  
      <Loader type="pacman" />
    </>
  )
}
export default Home
