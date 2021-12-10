import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import base_url from './api'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function Edit() {
    const notify = () => toast.success("Student Updated Successfully");
    const {id:tid}=useParams();
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    useEffect(() => {
        getData();
        }, []);

        async function getData() {
            axios.get(`${base_url}/students/`+tid)
                .then(res => {
                    console.log(res.data);
                    setName(res.data.name);
                    setEmail(res.data.email);
                    setId(res.data.id);
                },
                (error)=>{
                    console.log(error);
                })
          }

          async function categoryEdit (e) { 
            e.preventDefault();
            
            const data = {
                'id':id,
                'name':name,
                'email':email
              };
              axios
              .put(`${base_url}/students`, data)
              .then((response) => {
                setName("");
                setEmail("");
                setId("");
                notify();
              }).catch((err) => {
                console.log( err.data );
              });
            
         }
    return (
        <div className='py-5'>
            <ToastContainer />
            <form onSubmit={categoryEdit}>
            <label for="fname" style={{ fontSize:"20px"}}>Id</label>
            <input type="text" id="fname" name="id" value={id} onChange={(e)=>setId(e.target.value)} readOnly />
            <label for="fname" style={{ fontSize:"20px"}}>Name</label>
            <input type="text" id="fname" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label for="lname" style={{ fontSize:"20px"}}>Email</label>
            <input type="text" id="lname" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="submit" value="Submit" style={{ backgroundColor:"green",fontSize:"25px" }}/>
            </form>
        </div>
    )
}
