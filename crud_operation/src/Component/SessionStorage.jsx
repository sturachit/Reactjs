import React, { useState } from "react";

export const SessionStorage = () => {
  const [info, setInfo] = useState({
    Name: "",
    Email: "",
    pwd: "",
    Add: "",
    Mo: ""
  });
  const [array, setArray] = useState(
    JSON.parse(sessionStorage.getItem("Array")) || []
  );

  const Handlechange = (e) => {
    console.log(e.target);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    console.log(e.target);
    setArray([...array, info]);
    sessionStorage.setItem("Array", JSON.stringify([...array, info]));
  };

  const HandleDelete = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
    sessionStorage.setItem("Array", JSON.stringify(newArray));
  };

  return (
    <>
      <div>
        <h1>Session Storage</h1>
        <form action="" className="text-center mt-5 text-primary">
          <label htmlFor="Name" className="pe-3 fw-bold"><b> Name : </b></label>
          <input type="text" name="Name" id="Name" placeholder="Enter Your Name" value={info.Name} onChange={Handlechange} />
          <br />
          <br />
          <label htmlFor="Email" className="pe-3 fw-bold"><b> Email : </b></label>
          <input type="Email" name="Email" id="Email" placeholder="Enter Your Email" value={info.Email} onChange={Handlechange}/>
          <br />
          <br />
          <label htmlFor="pwd" className="pe-3 fw-bold"><b>Password : </b></label>
          <input type="password" name="pwd" id="pwd" placeholder=" Enter Your Password" value={info.pwd} onChange={Handlechange} />
          <br />
          <br />
          <label htmlFor="Add" className="pe-3 fw-bold"><b>Address : </b></label>
          <input type="text" id="Add" name="Add" value={info.Add} onChange={Handlechange} placeholder="Enter Your Address" />
          <br />
          <br />
          <label htmlFor="Mo" className="pe-3 fw-bold"><b>Mobile Number : </b></label>
          <input type="number" id="Mo" name="Mo" value={info.Mo} onChange={Handlechange} placeholder="Enter Your Mobile" />
          <br />
          <br />
          <button type="submit" onClick={HandleSubmit} className="p-2 px-5 text-center bg-primary fw-bold text-light border-0 " > Submit </button>
        </form>
      </div>
      <hr />
     
      <table className="table table-bordered border-primary w-75 mt-5 ms-5" border={3}>
        <thead>
          <th className="ps-5 border border-primary">Name</th>
          <th className="ps-5 border border-primary">Email</th>
          <th className="ps-5 border border-primary">Password</th>
          <th className="ps-5 border border-primary">Address</th>
          <th className="ps-5 border border-primary">Mobile Number</th>
          <th className="ps-5 border border-primary">Action</th>
        </thead>
        <tbody>
          {array.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.pwd}</td>
                <td>{item.Add}</td>
                <td>{item.Mo}</td>
                <td>
             
                  <button onClick={() => HandleDelete(index)} className="btn btn-danger" > Delete </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SessionStorage;