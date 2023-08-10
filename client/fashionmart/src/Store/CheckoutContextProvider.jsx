import React, { createContext } from "react";

export const CheckoutContext = createContext()

export default function CheckoutContextProvider(props) {
    async function addCheckout(item) {
        var response = await fetch("/checkout", {
            method: "post",
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.getItem("token"),
                "username": localStorage.getItem("username"),
                "role": localStorage.getItem("role")
            },
            body: JSON.stringify(item)
        })
        return await response.json()
    }
    async function getAllCheckout() {
        var response = await fetch("/checkout", {
            headers: {
                "authorization": localStorage.getItem("token"),
                "username": localStorage.getItem("username"),
                "role": localStorage.getItem("role")
            }
        })
        return await response.json()
    }
    async function getCheckout(item) {
        var response = await fetch("/checkout/"+item._id, {
            headers: {
                "authorization": localStorage.getItem("token"),
                "username": localStorage.getItem("username"),
                "role": localStorage.getItem("role")
            }
        })
        return await response.json()
    }
    async function getCheckoutUser(item) {
        var response = await fetch("/checkoutUser/"+localStorage.getItem("userid"), {
            headers: {
                "authorization": localStorage.getItem("token"),
                "username": localStorage.getItem("username"),
                "role": localStorage.getItem("role")
            }
        })
        return await response.json()
    }
    async function updateCheckout(item){
        var response = await fetch("/checkout/"+item._id,{
            method:"put",
            headers:{
                "content-type":"application/json",
                "authorization":localStorage.getItem("token"),
                "username":localStorage.getItem("username"),
                "role":localStorage.getItem("role")
            },
            body:JSON.stringify(item)
        })
        return await response.json()
    }
    async function deleteCheckout(item){
        var response = await fetch("/checkout/"+item._id, {
            method:"delete",
            headers: {
                "authorization": localStorage.getItem("token"),
                "username": localStorage.getItem("username"),
                "role": localStorage.getItem("role")
            }
        })
        return await response.json()
    }
    return (
        <CheckoutContext.Provider value={{
            addCheckout: addCheckout,
            getAllCheckout:getAllCheckout,
            getCheckout:getCheckout,
            deleteCheckout:deleteCheckout,
            updateCheckout:updateCheckout,
            getCheckoutUser:getCheckoutUser
        }}>
            {props.children}
        </CheckoutContext.Provider>
    )
}