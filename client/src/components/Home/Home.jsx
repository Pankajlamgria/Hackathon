import { Link } from 'react-router-dom'
import './Home.scss'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import Uppernav from '../Uppernav/uppernav'

const Home = () => {

  return (
    <>
      <div className="container home-page">
        <Uppernav/>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Home
