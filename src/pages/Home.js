import React,{useState,useEffect} from 'react'
import HomeNav from '../components/HomeNav'
import Homelogo from './Images/homelogo.png'
import Fastfood from './Images/Fastfood.png'
import HomeFoodItem from '../components/HomeFoodItem'
import Pizza from './Images/Pizza.png'
import Rawmeat from './Images/Rawmeat.png'
import Asianfood from './Images/Asianfood.png'
import "./Css/Home.css"
import img1 from './Images/img1.jpg'
import Axios from 'axios'
import Easy from './Images/easypickup.png'
import Quick from './Images/quickdelivery.png'
import Superdine from './Images/superdinein.png'
import Footer from '../components/Footer'

import {useNavigate} from 'react-router-dom'



function Home() {

  const navigate = useNavigate()

  const [contItems,setContItems] = useState([])
  const [cont,setCont] = useState("Indian");


  useEffect(() => {
    Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cont}`)
    .then((res)=>{
      setContItems(res.data.meals)
      console.log(res.data.meals)
    })
  },[cont])



  return (
    <div>
      <HomeNav />
      <div style={{marginTop:"20px",overflow:"hidden"}}></div>

      <div style={{display: 'flex', flexDirection:"row",justifyContent:"space-around",marginLeft:"70px",marginRight:"120px"}}>


        <div>

        <div style={{display:"flex",flexDirection:"column",marginTop:"120px",textAlign:"left"}}>
        <h5 style={{marginTop:"40px",marginBottom:"20px"}}>Easy way to make an order</h5>
        
      
       
        <div>
          <h1><span style={{color:"#cb202d" ,fontWeight:"bold"}}>Hungry?</span> Just Wait</h1>
          <h2>food at <span style={{color:"#cb202d",fontWeight:"bold"}}>your door</span></h2>
          
          <div style={{width:"400px"}}><p>India's largest Food Delivery, Dining and Restaurant Discovery Service. Better food for more people.</p></div>
          

          <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",marginTop:"70px"}}>
          <button style={{marginRight:"20px"}} type="button" class="btn btn-danger" id="ordernow-btn"
     onClick={()=>{
            navigate("/Jomato/cart")
          }} >Order now {'>'} </button>
          <button type="button" class="btn btn-light" id="seeallfoods-btn" style={{border:"1px solid #cb202d"}} onClick={()=>{
            navigate("/Jomato/foods")
          }} >See all foods</button>
          </div>
          
        </div>
        </div>

        </div>

        <div>
          {/* <img style={{width:"636px",height:"636px"}} src={Homelogo} alt="logo" /> */}
          <img style={{width:"650px",height:"600px"}} src={img1} alt="logo" />
        </div>
      </div>



      <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"50px"}}>

        <div className="imagebox">
          <img style={{width:"250px",height:"90px"}} src={Rawmeat}/>
        </div>
        <div className="imagebox">
          <img style={{width:"250px",height:"90px"}} src={Fastfood}/>
        </div>
        <div className="imagebox">
          <img  style={{width:"250px",height:"90px"}} src={Asianfood}/>
        </div>
        <div className="imagebox">
          <img style={{width:"250px",height:"90px"}} src={Pizza}/>
        </div>
      </div>


      <div>

        <div style={{marginTop:"140px"}}>
          <h1><span style={{color:"#cb202d",fontWeight:"bold"}}>Just</span> sit back at Home</h1>
  
          <h1>we will <span style={{color:"#cb202d",fontWeight:"bold"}}>take care</span></h1>
        </div>

      </div>



      <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"50px"}}>

      <div className="imagebox">
        <img style={{width:"150px",height:"120px"}} src={Superdine}/>
      </div>
      <div className="imagebox">
        <img style={{width:"150px",height:"120px"}} src={Easy}/>
      </div>
      <div className="imagebox">
        <img  style={{width:"150px",height:"120px"}} src={Quick}/>
      </div>
     
      </div>



      <div>


      </div>





      <div>

        <div style={{marginTop:"140px"}}>
          <h5>What<span style={{color:"#cb202d",fontWeight:"bold"}}> we serve</span> </h5>
          <h1 style={{fontWeight:"bold"}}>Popular Foods</h1>
        </div>

          <br></br>
          

        <div>
          
          <div style={{display: "flex",justifyContent: "center"}}>
            <div className="countries" style={{display: "flex",justifyContent: "space-evenly",alignItems: "center",backgroundColor:"#cb202d",width:"85%",color:"white",height:"60px",fontSize:"22px",borderRadius:"10px" }}>
             
              <div onClick={()=>{
                setCont("Indian")
              }} className="contname">Indian</div>
              <div className="contname" onClick={()=>{
                setCont("American")
              }}>American</div>
              <div className="contname" onClick={()=>{
                setCont("Chinese")
              }}>Chinese</div>
              <div className="contname" onClick={()=>{
                setCont("French")
              }}>French</div>
              <div className="contname" onClick={()=>{
                setCont("Japanese")
              }}>Japanese</div>
              <div className="contname" onClick={()=>{
                setCont("Italian")
              }}>Italian</div>


             
            </div>
          </div>

          <div style={{display: "flex",justifyContent: "center"}}>
          <div style={{width:"85%",border:"1px solid black",height:"870px",borderRadius:"10px",overflow:"hidden",display:"grid","grid-template-columns": "repeat( auto-fill, minmax(300px, 4fr) )"}}>

          {   
                  
                  (contItems==null ? (<p className="notSearch">Not found</p>) : 
                       (contItems.map((res)=>{
                           return(
                            <div style={{width:"250px",height:"290px",marginTop:"10px"}}>
                          <HomeFoodItem data={res} />
                          </div>
                          )} 
                   
                     ) 
                       )

                  )
                 
         }
            
          </div>
          </div>
        
        </div>
      </div>


      <Footer/>
    </div>
  )
}

export default Home
