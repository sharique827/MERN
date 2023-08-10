// /* eslint-disable jsx-a11y/alt-text */
// import React from 'react'
// import LeftNav from './LeftNav'
// import pic from "../../assets/images/profile.jpg"
// function AdminHome() {
//   return (
//     <div className='container-fluid'>
//     <div className='row'>
//         <div className='col-xxl-2 col-xl-3 lg-4 md-6 sm-12 col-12'>
//             <LeftNav/>
//         </div>
//         <div className='col-xxl-10 col-xl-9 lg-8 md-6 sm-12 col-12'>
//            <div className='row'>
//             <h4 className='background text-light text-center p-2 rounded'>Admin Home Page</h4>
//             <div className='col-md-5 col-12'>
//               <img src={pic} height="400px" width="100%" className="rounded"/>
//             </div>
//             <div className='col-md-7 col-12'>
//               <table className='table'>
//                 <tbody>
//                     <tr>
//                         <th>Name</th>
//                         <td>Sharique Zafar</td>
//                     </tr>   
//                     <tr>
//                         <th>User Name</th>
//                         <td>Sharique123</td> 
//                     </tr>
//                     <tr>
//                         <th>Email</th>
//                         <td>shariquezafar111@gmail.com</td>
//                     </tr>
//                     <tr>
//                         <th>Phone</th>
//                         <td>+91 8271789366</td>
//                     </tr>
//                 </tbody>
//               </table>  
//             </div>
//            </div>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default AdminHome





/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import LeftNav from './LeftNav'
import pic from "../../assets/images/profile.jpg"
import { useContext,useEffect } from 'react'
import {UserContext} from "../../Store/UserContextProvider"
import { useState } from 'react'
function AdminHome() {
  let [data,setdata]=useState("")
  var {getUser}=useContext(UserContext)
  async function getAPI(){
    var response=await getUser()
    console.log(response)
    if(response.result==="Done"){
       setdata(response.data)
   }
   else{
    alert(response.message)
   }
  }
  useEffect(()=>{
    getAPI()
  })
  return (
    <div className='container-fluid'>
    <div className='row'>
        <div className='col-xxl-2 col-xl-3 lg-4 md-6 sm-12 col-12'>
            <LeftNav/>
        </div>
        <div className='col-xxl-10 col-xl-9 lg-8 md-6 sm-12 col-12'>
           <div className='row'>
            <h4 className='background text-light text-center p-2 rounded'>Admin Home Page</h4>
            <div className='col-md-5 col-12'>
              <img src={pic} height="400px" width="100%" className="rounded"/>
            </div>
            <div className='col-md-7 col-12'>
              <table className='table'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{data.name}</td>
                    </tr>   
                    <tr>
                        <th>User Name</th>
                        <td>{data.username}</td> 
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{data.phone}</td>
                    </tr>
                </tbody>
              </table>  
            </div>
           </div>
        </div>
    </div>
    </div>
  )
}

export default AdminHome