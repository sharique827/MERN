import React,{useState,useEffect,useContext} from 'react'
import LeftNav from './LeftNav'

import { useNavigate,useParams } from 'react-router-dom';
import { BrandContext } from '../../Store/BrandContextProvider';
export default function AdminUpdateBrand() {
    var [name,setname] = useState("")
    var navigate = useNavigate()
    var {_id} = useParams()
    var {getBrand,updateBrand} = useContext(BrandContext)
    function getData(e){
        setname(e.target.value)
    }
    async function postData(e){
        e.preventDefault()
        var item = {
            name:name,
            _id:_id
        }
        var response = await updateBrand(item)
        if(response.result==="Done")
        navigate("/admin-brand")
        else
        alert(response.message)
    }
    async function getAPIData(){
        var item = {
            _id:_id
        }
        var response = await getBrand(item)
        if (response.result === "Done")
            setname(response.data.name)
        else
            alert(response.message)
    }
    useEffect(()=>{
        getAPIData()
    },[])
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Update Brand Page</h5>
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={getData} name="name" placeholder='Enter Brand Name' value={name}/>
                        </div>
                        <button type="submit" className="btn background text-light w-100 hover">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}