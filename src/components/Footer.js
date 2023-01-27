import React from 'react'
import {useNavigate} from 'react-router-dom'

function Footer() {

    const navigate = useNavigate();


  return (
    <div style={{backgroundColor: '#cb202d',color:"white",marginTop:"140px",paddingBottom:"50px"}}>
      <div style={{display: "flex",justifyContent: "space-evenly",height:"250px"}}>
        <div style={{marginTop:"30px"}}>
            
            <div style={{width:"260px",textAlign:"left"}}>
            <h3>Jomato</h3> 
            
            <br></br>
            <p>Jomato is an Indian multinational restaurant aggregator and food delivery company  founded by Prabhash Varma in 2022. Jomato provides menus as well as food delivery options from partner restaurants in select cities.  </p>
            </div>
        </div>

        <div style={{marginTop:"30px"}}>
            <h3>Delivery Time</h3>
            <br></br>
            <h5>Monday - Friday</h5>
            <p style={{fontSize:"15px"}}>9:00 AM - 10:30 PM</p>
            <h5>Saturday - Sunday</h5>
            <p style={{fontSize:"15px"}}>8:00 AM - 11:30 PM</p>
            
        </div>

        <div style={{marginTop:"30px"}}>
            <h3>Useful links</h3>
            <br></br>
            <p style={{cursor:"pointer"}} onClick={()=> navigate("/Jomato")}>  Home</p>
            <p style={{cursor:"pointer"}} onClick={()=>navigate("/Jomato/foods")}>Menu</p>
            {/* <p style={{cursor:"pointer"}}>Contact</p> */}
            <p style={{cursor:"pointer"}} onClick={()=>navigate("/Jomato/orders")}>Orders</p>
            <p style={{cursor:"pointer"}} onClick={()=>navigate("/Jomato/cart")}>Cart</p>

        </div>

        <div style={{marginTop:"30px"}}>
            <h3>Follow Us</h3>
            <br></br>
            <div style={{display:"flex",justifyContent: "space-evenly" }}>
            <i style={{marginRight:"15px"}} class="fa fa-facebook fa-2x" aria-hidden="true"></i>
              <i style={{marginRight:"15px"}} class="fa fa-twitter-square fa-2x"></i>
              <i style={{marginRight:"15px"}} class="fa fa-youtube-square fa-2x"></i>
              <i style={{marginRight:"15px"}} class="fa fa-rss-square fa-2x"> </i>            
          
            </div>
        </div>
      </div>
      <br></br>
      <br></br>
      © Jomato -Prabhash Varma. All Rights Reserved.
    </div>
  )
}

export default Footer
