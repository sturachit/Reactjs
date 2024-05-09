import React, { createContext, useContext } from "react";
const Ucontext = createContext()

// First to Fifth Component called with UseContext
export const FirstCom =(Props)=>{
    return(
        <div><h4>First Component Calling...</h4>
        <Ucontext.Provider value={Props.name}>
         <p className="text-danger">My name is {Props.name}</p>
            <FifthCom/>
        </Ucontext.Provider >
        </div>


    )
}

//Second to Fourth Component Called with useContext

export const SecCom =(Props)=>{
    return(
        <div><h4>Second Component Calling...</h4>
          <Ucontext.Provider value={Props.age}>
         <p className="text-danger">My Age is {Props.age}</p>
        <FourthCom/>
        </Ucontext.Provider >

        </div>


    )
}
const ThirdCom =(Props)=>{
    return(
        <div><h4>Third Component Calling...</h4>
        {/* <FourthCom name={Props.name}/> */}
        </div>


    )
}
const FourthCom =()=>{
    const four = useContext(Ucontext)
    return(
        <div><h4>Fourth Component Calling...</h4>
      <p>My Age is {four}</p>
        </div>


    )
}

const FifthCom =()=>{
    const PassData =useContext(Ucontext)
    return(
        <div><h4>Fifth Component Calling...</h4>
        <p className="text-info">My Name is {PassData}</p>
       {/* <p className="text-info">Name is {useContext(Ucontext)}</p> */}
        </div>


    )
}