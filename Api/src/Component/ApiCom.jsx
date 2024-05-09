import React, { useState ,useEffect} from 'react';
import {useNavigate} from'react-router-dom'
const  ApiCom =()=> {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [uid, setUid] = useState("");
  const [userData, setUserData] = useState({
       name: "",  
       age: "",
       salary: "",
  });


  const handleChange = (e) => {
       const { name, value } = e.target;
       setUserData({ ...userData, [name]: value });
  };
  const fetchData = async()=>{
    try{
      // const {data:response} =await axios.get('http://localhost:3000/users')
      await fetch('http://localhost:3000/users').then(response=>response.json()).then(res=>setData(res));
         
        }catch(error){
          console.error(error.message);
        }
} 
  useEffect(() => {
     
 fetchData();
},[])

  const saveData = (id) => {
    if(uid !==""){
      fetch(`http://localhost:3000/users/${uid}`, {
        method: "PUT",
        headers: {
             "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
   })
       .then((response) => response.json())
        .then(json => console.log(json))
        fetchData();

    }else{
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
             "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
   })
        .then((response) => response.json())
        .then(json => console.log(json))

      Navigate("/")
    }
   
  }

     const DeleteData =(id)=>{
        fetch("http://localhost:3000/users/"+id,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json"
            },
            // body: JSON.stringify(userData)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
 fetchData();

    } 


     const editData = (id) => {
      setUid(id)
       fetch("http://localhost:3000/users/"+id, {
            method: "PATCH",
            headers: {
                 "Content-Type": "application/json"
            },
           //  body: JSON.stringify(userData)
       })
            .then((response) => response.json())
            .then(json => setUserData(json))
         //  Navigate("/user")         
  }
    



  return (
      <>
  <form name="apiForm" action="" className='text-center' onSubmit={saveData} method='post'>
    <label htmlFor="" className='fw-bold p-2'>Name :  </label>
    <input type="text" name='name' id='name' className='fw-bold py-2' value={userData.name} onChange={handleChange}
      placeholder='Enter Your Name' required />
    <br />
    <br />
     <label htmlFor="" className='fw-bold p-2'>Age :  </label>
    <input type="text" name='age' id='age' className='fw-bold py-2' value={userData.age} onChange={handleChange}
      placeholder='Enter Your Age' required />
    <br />
    <br />
    <label htmlFor="" className='fw-bold p-2'>Salary :  </label>
    <input type="number" name='salary' id='salary' className='fw-bold py-2' value={userData.salary} onChange={handleChange}
      placeholder='Enter Your Salary' required />
    <br />
    <br /> 
    <button type="submit" class="bn29" value={uid !== "" ? "Update" : "Save"}>Save</button>
  </form>
  <br /><br />

  <table border="1" className='table table-bordered border-dark w-75 mt-2 text-center' style={{marginLeft:"200px",}}>
    <thead style={{color:"#5F9EA0"}}>
      <th className="border border-dark ">ID</th>
      <th className="border border-dark ">Name</th>
      <th className="border border-dark ">Age</th>
      <th className="border border-dark ">Salary</th>
      <th className="border border-dark ">Action</th>
    </thead>
    <tbody style={{color:"#4682B4"}}>
    {
      data.map((i,index) => {
        return (
        <tr key={index}  className='border border-primary fw-bold py-2 ps-2'>
          <td className="border border-dark fw-bold pt-3 " >{index +1 }</td>
          <td className="border border-dark fw-bold pt-3 ">{i.name}</td>
          <td className="border border-dark fw-bold pt-3 ">{i.age}</td>
          <td className="border border-dark fw-bold pt-3 ">{i.salary}</td>
           <button class="bn30" onClick={() => editData(i.id)}>Edit</button>
          <button type="button" class="bn30" onClick={() => DeleteData(i.id)}>Delete</button>
        </tr>
        )
      })
    }
  </tbody>
  </table>
</>
  )
}

export default ApiCom;