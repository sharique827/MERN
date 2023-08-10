import React, { useState, useEffect,useContext} from 'react'
import { UserContext } from '../../Store/UserContextProvider';
import LeftNav from './LeftNav'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function AdminUsers() {
    var [user, setuser] = useState([])
    var {getAllUser,deleteUser} = useContext(UserContext)
    async function deleteRecord(_id) {
        if(window.confirm("Are Your Sure to Delete that Item : ")){
            var item = {
                _id:_id
            }
            var response = await deleteUser(item) 
            if (response.result === "Done")
                getAPIData()
            else
                alert(response.message)
        }
    }
    async function getAPIData() {
        var response = await getAllUser()
        if (response.result === "Done")
            setuser(response.data)
        else
            alert(response.message)
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav/>
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Users List Page</h5>
                    <div className='table-responsive'>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email Id</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                            {
                                user.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item._id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.role}</td>
                                        <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord(item._id)}><DeleteForeverIcon /></button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}