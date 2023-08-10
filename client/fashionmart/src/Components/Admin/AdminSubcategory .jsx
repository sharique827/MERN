import React, { useState, useEffect,useContext} from 'react'
import LeftNav from './LeftNav'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import { Link } from 'react-router-dom';
import { SubcategoryContext } from '../../Store/SubcategoryContextProvider';
export default function AdminSubcategory() {
    var [subcategory, setsubcategory] = useState([])
    var {getAllSubcategory,deleteSubcategory} = useContext(SubcategoryContext)
    async function deleteRecord(_id) {
        if(window.confirm("Are Your Sure to Delete that Item : ")){
            var item = {
                _id:_id
            }
            var response = await deleteSubcategory(item) 
            if (response.result === "Done")
                getAPIData()
            else
                alert(response.message)
        }
    }
    async function getAPIData() {
        var response = await getAllSubcategory()
        if (response.result === "Done")
            setsubcategory(response.data)
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
                    <h5 className='background text-light text-center p-2'>Subcategory Page <Link to="/admin-add-subcategory" className='text-light'><AddIcon/></Link></h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th></th>
                                <th></th>
                            </tr>
                            {
                                subcategory.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item._id}</td>
                                        <td>{item.name}</td>
                                        <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-update-subcategory/${item._id}`}><EditIcon /></Link></td>
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