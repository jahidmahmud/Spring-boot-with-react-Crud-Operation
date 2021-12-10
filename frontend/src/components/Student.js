import React,{useEffect,useState} from 'react'
import axios from 'axios';
import base_url from './api'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Student() {
    const [data, setData] = useState([]);
    const notify = () => toast.info("Student Deleted");

    useEffect(() => {
        getData();
        }, []);
        async function getData() {
            axios.get(`${base_url}/students`)
                .then(res => {
                    console.log(res.data);
                    setData(res.data);
                },
                (error)=>{
                    console.log(error);
                })
          }

          async function deleteCat(id) {
            await axios
                .delete(`${base_url}/students/`+id)
                .catch((error) => console.log(error.resp));
            notify();
            getData();
          }
    return (
        <div className='py-5'>
            <ToastContainer />
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item) =>(
                                      <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td class="d-flex">
                                            <button type="button">
                                        <Link to={"/edit/"+item.id} style={{ textDecoration:"none" }}>Edit</Link></button> |||
                                           <button type='button' onClick={()=>deleteCat(item.id)}>
                                                Delete
                                           </button>
                                        </td>
                                    </tr>
                                      ))}
                </tbody>
            </table>
        </div>
    )
}
