import React,{ useState, useContext,useEffect} from 'react'
import HomeNav from '../components/HomeNav.js'
import {store} from '../App.js'
import './Css/Orders.css'
import {Link,useNavigate} from 'react-router-dom'
import Footer from '../components/Footer'

function Orders() {

   
    const {cartItems,setCartItems,orderslist,setOrderslist} = useContext(store);
    const navigate = useNavigate();

   return (
    <div>
       <HomeNav/>
       <div style={{marginTop: "20px"}}></div>
       <div className="cart-header" style={{ display: "flex" }}>
        <h1 style={{ "margin-top": "60px", marginLeft: "50px" }}>
          <i
            style={{ marginRight: "20px" }}
            class="fas fa-cubes"
          ></i>
          Orders
        </h1>
      </div>
      <hr style={{ width: "900px", height: "2px" }}></hr>



      
      <div style={{display: "flex",flexDirection: "row",justifyContent:"center"}}>
            {orderslist.length > 0 ? (
            <div className="orders-card" >
              {orderslist.map((item,key)=>{
                return(
                  <div className="order-item" style={{ display: "flex",flexDirection: "row" }}>
                  
                  <div style={{ display: "flex",flexDirection: "column" }}>
                      
                      <img style={{width:"120px"}} src={item.strMealThumb}/>
                    
                        </div>
                          <div>
                            <h2>{item.strMeal}</h2>
                             <p>Ordered on {item.add_date}</p>
                            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                              <p>Quantity: {item.quantity}</p>
                              <p>Bill: ₹ {item.total_price}</p>
                            </div>
                            <h4>Will reach you in 30 mins</h4>
                              </div>
                    <p style={{marginTop:"100px"}}>          
                     {/* <Link to={`/orders/${key}`}> <h6 >order details<i style={{ fontSize:"15px",marginRight:"30px",marginLeft:"3px"}} class="fa-solid fa-chevron-right"></i> </h6></Link> */}
                    </p>
                </div>
                )
              })}
            </div>
            ) : (
              <h1 style={{marginTop: "100px"}}>No Orders Placed <i className="far fa-meh-blank"></i></h1>
            )}
        </div>
        <Footer/>
    </div>
  )
}

export default Orders