import React, { useState, useEffect } from 'react';
import { db } from './Component/Firebase';
import { collection, addDoc, query, onSnapshot, deleteDoc, doc,updateDoc } from 'firebase/firestore';

function FirebaseCom(props) {
    const [Subject, setSubject] = useState("");
    const [AllUsers, setAllUsers] = useState([]);
    const [id, setId] = useState("");


    useEffect(() => {
        const q = query(collection(db, "Category"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];
            querySnapshot.forEach((doc) => {
                todosArray.push({ ...doc.data(), id: doc.id });
            });
            setAllUsers(todosArray);
        });
        return () => unsub();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(id !==""){
            // update data
            await updateDoc(doc(db, "Category", id), { Subject: Subject });
            setSubject("");
            setId("")
        }else{

            //insert data
            if (Subject !== "") {
                addDoc(collection(db, "Category"), {
                    Subject,
                    completed: false,
                });
             
            }
        }
       
    }
    //delete data
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "Category", id)); 
    }
    //edit data
    const handleEdit = async (Id) => {
        const q = query(collection(db, "Category"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.id === Id) {
                    setSubject(doc.data().Subject);
                }
            });
        });
       
        setId(Id);
    }
    return (
        <>
        <h3 style={{marginLeft:"600px"}}>Crud Operation with Firebase</h3>
            <form onSubmit={handleSubmit} >
                <input type="hidden"   />
                <div className="input-container d-flex justify-content-center align-item-center" >
                    <input type="text"
                        placeholder='Add Something'
                        value={Subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div className="btn-container d-flex justify-content-center align-item-center mt-2">
                    <button class="bn29">Add Todo</button>
                </div>
            </form>
            <table border="1" className='table table-bordered border-dark w-75 mt-2 text-center' style={{marginLeft:"200px"}}>
                <thead>
                    <tr>
                        <th className='border border-dark '>#</th>
                        <th className='border border-dark '>Id</th>
                        <th className='border border-dark '>Name</th>
                        <th className='border border-dark '>Status</th>
                        <th className='border border-dark '>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((i, index) => (
                        <tr key={i.id} className='border border-primary fw-bold py-2 ps-2'>
                            <td className='className="border border-dark fw-bold pt-3 "'>{index + 1}</td>
                            <td className='className="border border-dark fw-bold pt-3 "'>{i.id}</td>
                            <td className='className="border border-dark fw-bold pt-3 "'>{i.Subject}</td>
                            <td className='className="border border-dark fw-bold pt-3 "'>{(i.completed) ? "Yes" : "No"}</td>
                            <td><button type='button' class="bn30" onClick={() => handleDelete(i.id)}>Delete</button>
                            <button type='button' class="bn30"  onClick={()=>handleEdit(i.id)}>Edit</button></td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default FirebaseCom;
