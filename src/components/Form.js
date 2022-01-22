import {useState} from 'react';
import {Link} from 'react-router-dom'

function Form() {
  
 const[area,setArea] = useState("area");
 const[dr,setDr] = useState("doctor");
 const[drErr,setDrErr] = useState(false);
 const[areaErr,setAreaErr] = useState(false);
 

 function Handler(e){
  e.preventDefault();
  
 if(area==="area" && dr==="doctor"){
    alert("Please select AREA or TYPE OF DOCTOR!")
 }

 }

 function areaHandler(e){
  let item = e.target.value;
  if(item=="area"){
    setAreaErr(true)
  }
  else{
    setAreaErr(false)
  }

  setArea(item)
}

 function drHandler(e){
   let item = e.target.value;
   if(item=="doctor"){
     setDrErr(true)
   }
   else{
     setDrErr(false)
   }

   setDr(item)
 }

    return (
    <>
      
        <div className="row m-5"  id="form_container">
          <div className="col-xl-3 col-md-6 col-12 " >
            <form  className="form ">
              <label className="form-label fw-bold ">
                Please select your Prefered Area! <span style={{color:"red"}}>*</span>
              </label>
              <select className="form-select" onChange={areaHandler} aria-label="Default select example">
                <option value="area">Area</option>
                <option value="rupani">Rupani Circle</option>
                <option value="ghogha">Ghogha Circle</option>
                <option value="leela">Leela Circle</option>
                <option value="sardarnagar">Sardarnagar</option>
                <option value="subhashnagar">Subhashnagar</option>
              </select>

              <label className="form-label mt-3 fw-bold" >select type of Doctor!  <span style={{color:"red"}}>*</span></label>
              <select className="form-select" onChange={drHandler} aria-label="Default select example" > 
                <option value="doctor">Type of Doctor</option>
                <option value="dentist">Dentist</option>
                <option value="psychiatrist">Psychiatrist</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="nuerologist">Nuerologist</option>
                <option value="surgeon">Surgeon</option>
              </select>
            

              <button type="submit" className="btn btn-light mt-4 search" style={{color:'white'}} onClick={Handler} ><Link to ="/display">Search</Link></button>
            </form>
          </div>
        </div>
      
    </>
  );
}

export default Form;
