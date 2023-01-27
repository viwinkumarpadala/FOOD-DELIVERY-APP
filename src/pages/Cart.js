import React,{useContext,useState} from 'react'
import HomeNav from '../components/HomeNav'
import {store} from '../App' 
import './Css/Cart.css'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import Footer from '../components/Footer'

function Cart() {

  const {cartItems,setCartItems,orderslist,setOrderslist} = useContext(store);


  const [sum,setSum]=useState(0);
  const [nameMsg, setNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  const [stateMsg, setStateMsg] = useState("");
  const [pincodeMsg, setPincodeMsg] = useState("");
  const [address1Msg, setAddress1Msg] = useState("");
  
  


  const [orderItems,setOrderItems] =useState({add_name:"",add_email:"",add_phone:"",add_address1:"",add_address2:"",add_state:"",add_pincode:"",add_date:"",add_orderItems:[],add_total:0});
 
  const navigate = useNavigate();
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setOrderItems({ ...orderItems, [name]: value });

    var date=new Date();  
    var day=date.getDate();  
    var month=date.getMonth()+1;  
    var year=date.getFullYear();  
    var today=day+"-"+month+"-"+year;
      
    var h=date.getHours();  
    var m=date.getMinutes();  
    //var s=date.getSeconds();  
    var time=h+":"+m;
    var dateTime=today+" "+time;
    setOrderItems(previtem=>{
      return {...previtem,add_date:dateTime,add_orderItems:cartItems}
      })
  };

  const submitHandlerCart=(e)=>{
    e.preventDefault();
  
    if(cartItems.length <= 0){
      alert("Please add items to cart")
    }
    else if(orderItems.add_name===""){
      //alert("Please enter your name");
      setNameMsg("Enter your name!");
    }
    else if(orderItems.add_email==="" || !orderItems.add_email.includes("@")){
     // alert("Please enter valid email");
      setEmailMsg("Enter valid email!");
    }
    else if(orderItems.add_phone==="" || !orderItems.add_phone.match(/^[0-9]{10}$/)){
      //alert("Please enter your phone number");
      setPhoneMsg("Enter valid phone number!");
    }
    else if(orderItems.add_address1===""){
      //alert("Please enter your address");
      setAddress1Msg("Enter your address!");
    }
    else if(orderItems.add_state===""){
     // alert("Please enter your state");
      setStateMsg("Enter your state!");
    }
    else if(orderItems.add_pincode==="" || !orderItems.add_pincode.match(/^[0-9]{6}$/)){
      //alert("Please enter your pincode");
      setPincodeMsg("Enter valid pincode!");
    }
    else{
    
      setOrderItems({...orderItems,});

      console.log(orderItems);
      orderItems.add_orderItems.map((cartItem)=>{
        console.log("1")
        setOrderslist((prevlist)=>{
          return(
          [...prevlist,{add_name:orderItems.add_name,add_email:orderItems.add_email,add_phone:orderItems.add_phone,add_address1:orderItems.add_address1,add_address2:orderItems.add_address2,add_state:orderItems.add_state,add_pincode:orderItems.add_pincode,add_date:orderItems.add_date,add_orderItems:cartItem,add_total:orderItems.add_total,...cartItem}]
          )
        });
      })

      setCartItems([]);

      console.log(orderslist);
      alert("Ordered Successfully");
      navigate("/Jomato/orders")
    }
  }


  return (
    <div>
      <HomeNav/>
      <div style={{marginTop:"40px"}}></div>
      <h1 style={{textAlign: 'left',marginLeft:"50px"}}> <i
            style={{ marginRight: "20px"}}
            class="fa-solid fa-cart-shopping"
          ></i>Cart Items</h1>

      <hr style={{marginTop:"5px",height:"2px",width:"59%",color:"black"}}></hr>


      <div>

        <div style={{display:"flex",justifyContent:"center"}} >



          {cartItems.length > 0 ? (
            <table>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
            {cartItems.map((item)=>{
              return(
                <tr>
                  <td><img style={{width:"90px",height:"90px",borderRadius:"15px"}} src={item.strMealThumb} alt="meal"/></td>
                  <td style={{padding:"20px"}}>{item.strMeal}</td>
                  <td>₹ {item.total_price}</td>
                  <td><div style={{display:"flex", justifyContent: "space-evenly"}}><div style={{color:"white",backgroundColor:"green",width:"20px",textAlign:"center",borderRadius:"5px",cursor:"pointer",fontSize:"15px"}} onClick={()=>{

            setCartItems((prevlist)=>{
              return(
                prevlist.map((previtem)=>{
                  if(previtem.idMeal===item.idMeal){
                    return {...previtem,total_price:previtem.total_price+previtem.price}
                  }
                  else{
                    return previtem;
                  }
                })
              )
            })

                    setCartItems((prevlist)=>{
                      return(
                        prevlist.map((previtem)=>{
                          if(previtem.idMeal===item.idMeal){
                            return {...previtem,quantity:previtem.quantity+1}
                          }
                          else{
                            return previtem;
                          }
                        })
                      )
                    })

                    
                  }} >+</div>{item.quantity}<div style={{color:"white",backgroundColor:"red",width:"20px",textAlign:"center",borderRadius:"5px",cursor:"pointer",fontSize:"15px"}} onClick={()=>{

                    setCartItems((prevlist)=>{
                      return(
                        prevlist.map((previtem)=>{
                          if(previtem.idMeal===item.idMeal && previtem.quantity>1){
                            return {...previtem,total_price:previtem.total_price-previtem.price}
                          }
                          else{
                            return previtem;
                          }
                        })
                      )
                    })

                    setCartItems((prevlist)=>{
                      return(
                        prevlist.map((previtem)=>{
                          if(previtem.idMeal===item.idMeal && previtem.quantity>1){
                            return {...previtem,quantity:previtem.quantity-1}
                          }
                          else{
                            return previtem;
                          }
                        })
                      )
                    })

                   
                  }}>-</div></div></td>
                  <td><div className="delete-btn" onClick={()=>{
                    setCartItems(cartItems.filter((res)=>res.idMeal!==item.idMeal))
                    toast.error("Item removed from cart",{position: toast.POSITION.BOTTOM_RIGHT})
                  }}><i style={{fontSize:"18px",color:"#cb202d"}} class="fa fa-trash" aria-hidden="true"></i>
</div></td>
                </tr>
              )
            })}

          </table> 
          ) : (
            <div style={{marginTop:"50px",marginBottom:"50px",fontSize:"18px"}}>No items in cart</div>
          )}
        </div>


      </div>



            <div>
            <h1 style={{textAlign: 'left',marginLeft:"50px",marginTop:"70px"}}><i
            style={{ marginRight: "20px" }}
            class="fas fa-shipping-fast"
          ></i>Shipping Address</h1>

            <hr style={{marginTop:"5px",height:"2px",width:"59%",color:"black"}}></hr>
              <div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
                {/* <div className="total">
                  <h3>Total</h3>
                  <h3>₹ {cartItems.reduce((a,b)=>a+b.price,0)}</h3>

                </div>   */}
              </div>

                
            </div>

              
            <div className="container-form" style={{display: 'flex', justifyContent: 'center'}}>
            <form onSubmit={submitHandlerCart}>
            <div className="container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Name</b>
                  </label>
                  <input
                    type="text"
                    name="add_name"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="john"
                    // value={user.firstName}
                    onChange={(e)=>{
                      setNameMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{ nameMsg }</p>
                </div>
                
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    name="add_email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="john@gmail.com"
                    // value={user.email}
                    onChange={(e)=>{
                      setEmailMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{emailMsg}</p>
                </div>
                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Phone</b>
                  </label>
                  <input
                    type="text"
                    name="add_phone"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="99****99"
                    // value={user.phone}
                    onChange={(e)=>{
                      setPhoneMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{phoneMsg}</p>
                </div>
              </div>






              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Address Line 1</b>
                  </label>
                  <input
                    type="text"
                    style={{height:"70px"}}
                    name="add_address1"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                    // value={user.email}
                    onChange={(e)=>{
                      setAddress1Msg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{address1Msg}</p>
                </div>
                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Address Line 2</b>
                  </label>
                  <input
                    type="text"
                    style={{height:"70px"}}
                    name="add_address2"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                    // value={user.phone}
                    onChange={(e)=>{
                      setPhoneMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{}</p>
                </div>
              </div>




             

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>State</b>
                  </label>
                  <input
                    type="text"
                    name="add_state"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Andhra Pradesh"
                    // value={user.state}
                    onChange={(e)=>{
                      setStateMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{stateMsg}</p>
                </div>


                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Pincode</b>
                  </label>
                  <input
                    type="text"
                    name="add_pincode"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="500001"
                    // value={user.pincode}
                    onChange={(e)=>{
                      setPincodeMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{pincodeMsg}</p>
                </div>



                
              </div>

              <div style={{display:"flex",justifyContent: "center"}}>
              <hr style={{ width: "400px", height: "2px" }}></hr>
              </div>
             

              <div>
              <label for="exampleInputEmail1" class="form-label">
                    <h3>Total Bill</h3>
                </label>
                <p style={{ fontSize: "30px" }}>₹ {cartItems.reduce((a,b)=>a+b.total_price,0)}</p>
                
              </div>

                
              <div style={{display:"flex",justifyContent: "center"}}>
              <hr style={{ width: "400px", height: "2px" }}></hr>
              </div>

              <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <h3>Payment Mode</h3>
                  </label>

                  <div style={{display: "flex", justifyContent: "center" }}>
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={true}
                    style={{marginRight: "10px"}}
                
                  />
                  
                  <div>
                    <p style={{fontSize:"20px",marginTop:"10px"}}>Cash On Delivery</p>
                  </div>
                 </div>
                </div>


              <button type="submit" class="btn btn-primary">
                Order Items
              </button>
            </div>
          </form>
          </div>
                  <Footer/>
    </div>
  )
}

export default Cart
