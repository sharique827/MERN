import React, { useState, useEffect,useContext} from 'react'
import LeftNav from './LeftNav'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import { Link } from 'react-router-dom';
import { MaincategoryContext } from '../../Store/MaincategoryContextProvider';
export default function AdminMaincategory() {
    var [maincategory, setmaincategory] = useState([])
    var {getAllMaincategory,deleteMaincategory} = useContext(MaincategoryContext)
    async function deleteRecord(_id) {
        if(window.confirm("Are Your Sure to Delete that Item : ")){
            var item = {
                _id:_id
            }
            var response = await deleteMaincategory(item) 
            if (response.result === "Done")
                getAPIData()
            else
                alert(response.message)
        }
    }
    async function getAPIData() {
        var response = await getAllMaincategory()
        if (response.result === "Done")
            setmaincategory(response.data)
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
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Maincategory Page <Link to="/admin-add-maincategory" className='text-light'><AddIcon /></Link></h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th></th>
                                <th></th>
                            </tr>
                            {
                                maincategory.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item._id}</td>
                                        <td>{item.name}</td>
                                        <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-update-maincategory/${item._id}`}><EditIcon /></Link></td>
                                        <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord(item._id)}><DeleteForeverIcon /></button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}