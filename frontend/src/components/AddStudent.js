import React,{useState} from 'react'
import "../nav.css"
import axios from 'axios';
import base_url from './api'
import { ToastContainer, toast } from 'react-toastify';

export default function AddStudent() {
    const notify = () => toast.success("Student added successfully");
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    async function tagSubmit(e){
        if(name!="" || email!=""||id!=""){
            e.preventDefault();
            const data = {
                'id':id,
                'name':name,
                'email':email
            };

            axios.post(`${base_url}/students`, data)
          .then((response) => {
            setName("");
            setEmail("");
            setId("");
            notify();
          }).catch((err) => {
            console.log( err.data );
          });
        }
        else{
            alert("all fields are required");
        }
    }
    return (
        <div className='py-5'>
            <ToastContainer />
            <form onSubmit={tagSubmit}>
            <label for="fname" style={{ fontSize:"20px"}}>Id</label>
            <input type="text" id="fname" name="id" value={id} onChange={(e)=>setId(e.target.value)} />
            <label for="fname" style={{ fontSize:"20px"}}>Name</label>
            <input type="text" id="fname" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label for="lname" style={{ fontSize:"20px"}}>Email</label>
            <input type="text" id="lname" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="submit" value="Submit" style={{ backgroundColor:"green",fontSize:"25px" }}/>
            </form>
        </div>
    )
}
