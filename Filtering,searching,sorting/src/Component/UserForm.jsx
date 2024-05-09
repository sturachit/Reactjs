import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const User = () => {

     const [initialInfo] = useState({ id:"",Name: "", Email: "", pwd: "", Add: "", Mo: "" });
     const [array, setArray] = useState(JSON.parse(localStorage.getItem("Array")) || []);
     const [info, setInfo] = useState(initialInfo);
     const [id, setId] = useState("")
     const navigate = useNavigate();
     
     const Handlechange = (e) => {
          console.log(e.target);
          setInfo({ ...info, [e.target.name]: e.target.value });
     }

     const HandleSubmit = (e) => {
          e.preventDefault()
          if(info.Name.length == 0){
               return 
          }
          info.push(initialInfo)
          setArray([...array, info]);
          localStorage.setItem("Array", JSON.stringify(array));
          setArray(JSON.parse(localStorage.getItem('Array')));
          setInfo({Name :''});
          navigate('/list ')


          localStorage.setItem("Array", JSON.stringify([...array, info]));
          if (!info.Name || !info.Email || !info.pwd || !info.Add || !info.Mo) {
              //  alert("Please fill in all fields");
               return;
          }
     }
     


     return (
          <>
               {/* <div className=""> */}
                    <form  action="" className="text-center mt-5   w-75   " style={{color:"#5F9EA0",marginLeft:"450px",height:"450px"}} >
                    <table border="0" className="w-50">
                      <tr>
                        <td><label htmlFor="Name" className=" fw-bold mt-3 " style={{paddingLeft:"120px"}}>Name : </label> </td>
                        <td><input type="text" name="Name" id="Name" placeholder="Enter Your Name" className="border border-1  fw-bold text-center" required value={info.Name} onChange={Handlechange} />  </td>
                      </tr>
                      <tr>
                        <td><label htmlFor="Email" className=" fw-bold mt-3" style={{paddingLeft:"120px"}}>Email :</label></td>
                        <td><input type="email" name="Email" id="Email" placeholder="Enter your Email Id" className="border border-1  fw-bold text-center" required value={info.Email} onChange={Handlechange} /></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="pwd" className=" fw-bold mt-3" style={{paddingLeft:"140px"}}>Password :</label></td>
                        <td><input type="password" name="pwd" id="pwd" placeholder=" Enter your Password" className="border border-1 fw-bold text-center" required value={info.pwd} onChange={Handlechange} />       </td>
                      </tr>
                        
                        <tr>
                          <td><label htmlFor="Mo" className=" fw-bold mt-3" style={{paddingLeft:"130px"}}> Number : </label></td>
                          <td><input type="number" id="Mo" name="Mo" className=" border border-1 text-center fw-bold" required value={info.Mo} onChange={Handlechange} placeholder="Enter your Mobile" /></td>
                        </tr>
                    
                         <tr >
                          <td colSpan={2} ><button type="submit" onClick={HandleSubmit} className=" px-4 mt-4 pt-2 pb-2   fw-bold text-dark rounded border-0 " style={{backgroundColor:"#8FBC8F"}}>Submit</button></td>
                          <td></td>
                         </tr>
                      </table>
                      
                    </form >
                <div style={{display:"flex",justifyContent:"center"}}>
                  <button className='btn btn-danger mt-3 ms-2' onClick={() => navigate(-1)}>Back</button>
                  <button className='btn btn-primary mt-3 ms-2' onClick={() => navigate(1)}>Next</button>
                  </div>
{/* c               </div> */}
          </>
     )
}

export default User;