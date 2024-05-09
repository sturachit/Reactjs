import React, { useState, } from "react";
import { Link,useNavigate } from "react-router-dom";



export default function UserTable() {

     const [initialInfo] = useState({ id:"",Name: "", Email: "", pwd: "", Add: "", Mo: "" });
     const [array, setArray] = useState(JSON.parse(localStorage.getItem("Array")) || []);
     const [info, setInfo] = useState(initialInfo);
     const [editMode, setEditMode] = useState(false);
     const [editIndex, setEditIndex] = useState(null);
      const navigate = useNavigate();
      const filt = JSON.parse(localStorage.getItem('Array'))
      //searching
      const searchData = (val) => {
        if (val !== '') {
          let data = array.filter(i => i.Name.includes(val) || i.Email.includes(val));
          setArray(data);
        } else {
          setArray(JSON.parse(localStorage.getItem("Array")));
        }
      }
      //Filter
      const FilterUser = (val) => {
          const fildata = JSON.parse(localStorage.getItem('Array'))
          if (val !== "") {
               let abc = fildata.filter((i) => {
                    return i.Name == val;
               })
               setArray(abc);
          }
     }
     //sorting
      const sortData = (val) => {
        let data;
        if(val == 'desc') {
            data =[...array].sort((a,b)=>{
                return b.name > a.name ? 1 : -1;
            })
        }
        else if(val == 'asc'){
                data = [...array].sort((a,b)=>{
                    return b.name > a.name ? 1 : -1;
                })
            }
            setArray(data);
        }

        
        
     const HandleDelete = (index) => {
          const newArray = [...array];
          newArray.splice(index, 1);
          setArray(newArray);
          localStorage.setItem("Array", JSON.stringify(newArray));
     }
 // Handle Edit
 const HandleEdit = (index) => {
     setEditMode(true);
     setEditIndex(index);
     setInfo(array[index]);
   }
 
   // Handle Update
   const HandleUpdate = () => {
     const updatedArray = [...array];
     updatedArray[editIndex] = info;
     setArray(updatedArray);
     localStorage.setItem("Array", JSON.stringify(updatedArray));
     setEditMode(false);
     setEditIndex(null);
     setInfo(initialInfo);
   }  
      return (
          <div >

            <div className="">
               
                <div className="mt-2" style={{marginLeft:"200px",}}>
                    
               <input type="text" name="searchBox" id="searchBox" placeholder="Search..." onChange={(e)=>searchData(e.target.value)} />
               <select  className="ml-5" name="Name" onChange={(e) => FilterUser(e.target.value)}>
                    <option value="">-----Select-----</option>{
                         filt.map((e) => {
                              return <option value={e.Name}> {e.Name}</option>
                         })
                    }
        </select>
                <label className="ml-4">Name :</label>
                <select name="srNo" className="ml-2" onChange={(e)=>{sortData(e.target.value)}}>
                <option value="asc"><i class="fa-regular fa-sort-up"></i></option>
                <option value="desc" className="c"><i class="fa-sharp fa-regular fa-sort-down"></i></option>
                </select>
             
                </div>

            <table className="table table-bordered border-dark w-75 mt-2 text-center" style={{marginLeft:"200px",}}>
                    <thead style={{color:"#5F9EA0"}}>
                         <th className="border border-dark ">Id</th>
                         <th className="border border-dark ">Name</th>
                         <th className="border border-dark ">Email</th>
                         <th className="border border-dark ">Password</th>
                         {/* <th className="border border-dark ">Address</th> */}
                         <th className="border border-dark ">Mobile Number</th>
                         <th className="border border-dark ">Action</th>
                    </thead>
                    <tbody style={{color:"#4682B4"}}>

                         {array.map((item, index) => {
                              return (
                                   <tr key={index}>
                                        <td className="border border-dark fw-bold">{index + 1}</td>
                                        <td className="border border-dark fw-bold">{item.Name}</td>
                                        <td className="border border-dark fw-bold">{item.Email}</td>
                                        <td className="border border-dark fw-bold pe-2">{item.pwd}</td>
                                        {/* <td className="border border-dark fw-bold">{item.Add}</td> */}
                                        <td className="border border-dark fw-bold">{item.Mo}</td>
                                        <td className="border border-dark fw-bold"><button onClick={() => HandleDelete(index)} className="btn btn-danger ms-1 fw-bold">Delete</button>
                                             <button onClick={() => HandleEdit(index)} className="btn btn-info ms-1 fw-bold">Edit</button>
                                        </td>
                                   </tr>
                              )
                         })     
                         }
                    </tbody>
               </table>
            </div>
              
        <div className="position-fixed start-50   translate-middle" >
        <button className='btn btn-danger mt-3 ms-2' onClick={() => navigate(-1)}>Back</button>
        <button className='btn btn-primary mt-3 ms-2' onClick={() => navigate(1)}>Next</button>
        </div>
          </div>
)
}