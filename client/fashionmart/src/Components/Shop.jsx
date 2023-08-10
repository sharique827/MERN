import React, { useState, useContext, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Product from './Product';

import { Link, NavLink, useParams } from "react-router-dom"
import { BrandContext } from '../Store/BrandContextProvider';
import { MaincategoryContext } from '../Store/MaincategoryContextProvider';
import { SubcategoryContext } from '../Store/SubcategoryContextProvider';
export default function Shop() {
    var { mc, sc, br,search } = useParams()
    var [maincategory, setmaincategory] = useState([])
    var [subcategory, setsubcategory] = useState([])
    var [brand, setbrand] = useState([])
    var { getAllMaincategory } = useContext(MaincategoryContext)
    var { getAllSubcategory } = useContext(SubcategoryContext)
    var { getAllBrand } = useContext(BrandContext)
    async function getAPIData() {
        var responsemain = await getAllMaincategory()
        setmaincategory(responsemain.data)
        var responsesub = await getAllSubcategory()
        setsubcategory(responsesub.data)
        var responsebr = await getAllBrand()
        setbrand(responsebr.data)
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <div className="container-fluid">
            <Grid container spacing={2}>
                <Grid item md={2} xs={12} >
                    <h5 className='background text-light text-center p-2'>Menu</h5>
                    <Box sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
                        <nav aria-label="secondary mailbox folders">
                            <h5 className="background text-light text-center p-1">Maincategory</h5>
                            <List>
                                <ListItem disablePadding component={Link} to={`/shop/All/${sc}/${br}/None`}>
                                    <ListItemButton>
                                        <ListItemText primary="All" />
                                    </ListItemButton>
                                </ListItem>
                                {
                                    maincategory.map((item, index) => {
                                        return <ListItem key={index} disablePadding component={Link} to={`/shop/${item.name}/${sc}/${br}/None`}>
                                            <ListItemButton>
                                                <ListItemText primary={item.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    })
                                }
                            </List>
                        </nav>
                    </Box>
                    <Box sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
                        <nav aria-label="secondary mailbox folders">
                            <h5 className="background text-light text-center p-1">Subcategory</h5>
                            <List>
                                <ListItem disablePadding component={Link} to={`/shop/${mc}/All/${br}/None`}>
                                    <ListItemButton>
                                        <ListItemText primary="All" />
                                    </ListItemButton>
                                </ListItem>
                                {
                                    subcategory.map((item, index) => {
                                        return <ListItem  key={index} disablePadding component={Link} to={`/shop/${mc}/${item.name}/${br}/None`}>
                                            <ListItemButton>
                                                <ListItemText primary={item.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    })
                                }
                            </List>
                        </nav>
                    </Box>
                    <Box sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
                        <nav aria-label="secondary mailbox folders">
                            <h5 className="background text-light text-center p-1">Brand</h5>
                            <List>
                                <ListItem disablePadding component={Link} to={`/shop/${mc}/${sc}/All/None`}>
                                    <ListItemButton>
                                        <ListItemText primary="All" />
                                    </ListItemButton>
                                </ListItem>
                                {
                                    brand.map((item, index) => {
                                        return <ListItem  key={index} disablePadding component={Link} to={`/shop/${mc}/${sc}/${item.name}/None`}>
                                            <ListItemButton>
                                                <ListItemText primary={item.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    })
                                }
                            </List>
                        </nav>
                    </Box>
                </Grid>
                <Grid item md={10} xs={12} >
                    <h5 className='background text-light text-center p-2'>Shop Section</h5>
                    <Product mc={mc} sc={sc} br={br} search={search} />
                </Grid>
            </Grid>
        </div>
    )
}