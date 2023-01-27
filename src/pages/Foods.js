import React,{useEffect,useState} from 'react'
import HomeNav from '../components/HomeNav'
import './Css/Foods.css'
import FoodItem from '../components/FoodItem'
import Axios from 'axios'
import Footer from '../components/Footer'

function Foods() {

  const [searchItem,setSearchItem] = useState("");
  const [searchList,setSearchList] = useState([]);
  

  useEffect(() => {
    Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
    .then((res) => {
      setSearchList(res.data.meals)
  
    }).then(()=>{
      console.log(searchList)
      
    })
  },[searchItem])

  const handleSearch = (e) => {
    setSearchItem(e.target.value)
  }




  return (
    <div>
      <HomeNav/>

      <div style={{marginTop:"10px"}}>

      <div>
      <div style={{fontFamily: 'fantasy',marginTop:"60px"}}><h1>Popular Foods</h1></div>
        <div style={{display: 'flex', flexDirection:"row",justifyContent:"space-evenly",marginTop:"60px"}}>
          
          

    <div className="container" >
        <div class="row height d-flex justify-content-center align-items-center">

            <div class="col-md-6">

              <div style={{border:"1px solid black",borderRadius:"10px"}} class="form">
                <i class="fa fa-search"></i>
                <input type="text" class="form-control form-input" placeholder="Search your favorite item..."   onChange={(e)=>{
                  setSearchItem(e.target.value);
                }} />
                <span class="left-pan"><i class="fa fa-microphone"></i></span>
              </div>
        
            </div>

        </div>
        </div>

          {/* <div>Filter</div> */}
        </div>


        <hr style={{marginTop:"40px",marginBottom:"50px"}}></hr>
      </div>


      <div style={{marginTop:"20px"}}>
        <div style={{display:"grid","grid-template-columns": "repeat( auto-fill, minmax(370px, 3fr) )"}}>
        {   
                  
                  (searchList==null ? (<p className="notSearch">Not found</p>) : 
                       (searchList.map((res)=>{
                           return(
                          <FoodItem data={res}/>
                          )} 
                   
                     ) 
                       )

                  )
                 
         }

        </div>
      </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Foods
