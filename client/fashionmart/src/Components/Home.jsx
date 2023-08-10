/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper} from '@mui/material'
import pic1 from "../assets/images/img1.jpg"
import pic2 from "../assets/images/img2.jpg"
import pic3 from "../assets/images/img3.jpg"
import pic4 from "../assets/images/img4.jpg"
import pic5 from "../assets/images/img5.jpg"
import pic6 from "../assets/images/img6.jpg"
import pic7 from "../assets/images/img7.jpg"
import pic8 from "../assets/images/img8.jpg"
import pic9 from "../assets/images/img9.jpg"
import pic10 from "../assets/images/img10.jpg"
import "../assets/css/mystyle.css"
import Product from './Product'
var items=[
    {
        pic:pic1
    },
    {
        pic:pic2
    },
    {
        pic:pic3
    },
    {
        pic:pic4
    },
    {
        pic:pic5
    },
    {
        pic:pic6
    },
    {
        pic:pic7
    },
    {
        pic:pic8
    },
    {
        pic:pic9
    },
    {
        pic:pic10
    }
]
function Item(props){
    return(
        <Paper>
            <img src={props.item.pic} width="100%" height="300px"/>
        </Paper>
    )
}
function Home() {
  return (
    <>
    <Carousel className="margin">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        <h3 className='text-light text-center p-1 background radius'>Latest Trends Section:</h3>
        <Product mc="All" sc="All" br="All" search="None"/>
    </>
  )
}

export default Home