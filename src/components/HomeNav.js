import React,{useContext} from 'react'
import logo from './Images/jomatologo.jpeg'
import {Link}   from 'react-router-dom'
import {store} from '../App'


function HomeNav() {


  const {cartItems,setCartItems} = useContext(store);


  return (
    <div style={{backgroundColor: '#ea4f5d',top:"0",width:"100%",overflow: "hidden"}}>
      <nav className="navbar navbar-expand-lg ">
  <div  className="container-fluid">
    <img src={logo} style={{width:"130px",height:"65px",marginLeft:"80px",marginTop:"0px"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul style={{marginRight:"70px",marginTop:"10px"}} className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/Jomato" className="nav-link active" aria-current="page" style={{color:"white",fontSize:"20px",fontFamily:"fantasy",fontSize:"18px"}}>Home</Link>
         
        </li>


        <li className="nav-item">
        <Link to="/Jomato/foods" className="nav-link active" aria-current="page" style={{color:"white",fontSize:"20px",fontFamily:"fantasy",fontSize:"18px"}}>Foods</Link>
        </li>
        <li className="nav-item">
        <Link to="/Jomato/contact" className="nav-link active" aria-current="page" style={{color:"white",fontSize:"20px",fontFamily:"fantasy",fontSize:"18px"}}>Contact</Link>
        </li>

        {/* <li className="nav-item">
        <Link to="/cart" className="nav-link active" aria-current="page" style={{color:"white",fontSize:"20px",fontFamily:"fantasy",fontSize:"18px"}}>Cart</Link>
        </li> */}
        <li className="nav-item">
        <Link to="/Jomato/orders" className="nav-link active" aria-current="page" style={{color:"white",fontSize:"20px",fontFamily:"fantasy",fontSize:"18px"}}>Orders</Link>
        </li>
        <li className="nav-item">
        <Link to="/Jomato/cart"><a className="nav-link active position-relative" > <i  style={{marginRight:"5px",fontSize:"23px",color:"white"}} class="fa-solid fa-cart-shopping"></i> <span  style={{color:"white" ,fontSize:"15px",backgroundColor:"rgba(255,103,108.977"}} class=" top-0 start-100 translate-middle badge rounded-circle">
    {cartItems.length}

  </span>
 </a></Link>                 


        </li>
      

        
      </ul>
      {/* <span className="navbar-text">
        Navbar text with an inline element
      </span> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default HomeNav
