import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function Read() {
    const [userData, setuserData] = useState([]);
    const getUsersData = async()=>{
    const {data} = await axios.get(`https://618f638250e24d0017ce16ea.mockapi.io/fakeData`);
    setuserData(data)

    }

    useEffect(()=> { 
        getUsersData() 
    }, [])

    const setData = (udata)=>{
     console.log(udata)
    }

     const onDelete = async(id)=>{
      const del = await axios.delete(`https://618f638250e24d0017ce16ea.mockapi.io/fakeData/${id}`)
      getUsersData();
     }

    return(
        <div>
            <table className="table container m-4">
  <thead className='bg-dark text-white'>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">FIRSTNAME</th>
      <th scope="col">LASTNAME</th>
      <th scope="col">MOBILE NUMBER</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PASSWORD</th>
      <th scope="col">CONFIRM PASSWORD</th>
      <th scope="col">UPDATE</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
      { userData.map((detail)=>(
           <tr key={detail.id}> 
        
           <th scope="row">{detail.id}</th>
           <td>{detail.firstName}</td>
           <td>{detail.lastName}</td>
           <td>{detail.phone}</td>
           <td>{detail.email}</td>
           <td>{detail.password}</td>
           <td>{detail.cfnPassword}</td>
           <td><Link 
           to={"/update"}
           state={detail}
           >
           
           <button className='btn btn-info' onClick={()=>{setData(detail)}}>Update</button>
           </Link></td>
           
           <td>
           
           <button className='btn btn-info' onClick={()=>{onDelete(detail.id)}}>Delete</button>
           </td>
         </tr>

      ))
   
}
  </tbody>
</table>
        </div>
    )
}

export default Read
