import {createContext, useEffect, useState} from "react";
import axios from "axios";




export const CustomContext = createContext()

export const Context = (props) => {


    const [menu,setMenu]= useState([]);
    const [cart, setCart] = useState([])
    const [orders, setOrders] = useState([])

    const changeCart = (item) => {
        if (cart.findIndex(el => el.id === item.id) > - 1) {
            setCart(cart.filter(el => el.id !== item.id))
        } else {
            setCart([...cart, item])
        }
    }

    const getAllMenu=()=>{
        axios('http://localhost:8080/menu')
            .then(({data})=> setMenu(data))
            .catch((erros)=> console.log(erros))

    };

    const getAllOrders = () => {
        axios('http://localhost:8080/orders')
            .then(({data}) => setOrders(data))
            .catch((erros) => console.log(erros))
    }

    const value = {
        getAllMenu,
        getAllOrders,
        menu,
        setMenu,
        cart,
        setCart,
        orders,
        setOrders,
        changeCart
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}
