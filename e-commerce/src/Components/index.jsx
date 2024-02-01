import { NavLink } from "react-router-dom"

const { NavLink } = require("react-router-dom")

const Navbar =()=>{
    const activeStyle ='underline'

    return(
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8  text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semobold text-l g marker:">
                    <NavLink
                    to='/'>
                shopi
                    </NavLink>
                </li>

                <li>
                    <NavLink
                    to='/'
                    className ={({isActive})=>
                    isActive ? activeStyle : underfined
                    }>
All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/clothes'
                    className ={({isActive})=>
                    isActive ? activeStyle : underfined
                    }>
Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/electronics'
                    className ={({isActive})=>
                    isActive ? activeStyle : underfined
                    }>
Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/furnitures'
                    className ={({isActive})=>
                    isActive ? activeStyle : underfined
                    }>
Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/toys'
                    className ={({isActive})=>
                    isActive ? activeStyle : underfined
                    }>
Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others'
                    className ={({isActive})=>
                    isActive ? activeStyle : underfined
                    }>
Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center">
                <li className="text-black/60">
                    amezquita@gmail.com
                </li>

                <li>
                    <NavLink
                    to='/my-orders'
                    className ={({isActive})=>
                    isActive ? activeStyle : underfined
                    }>
My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/my-account'
                    className ={({isActive})=>
                    isActive ? activeStyle : underfined
                    }>
My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/sing-in'className ={({isActive})=>
                    isActive ? activeStyle : underfined
                    }>
Sing In 
                    </NavLink>
                </li>
                <li>
                EmolliIconooooo 00
                </li>
                <li>
                    <NavLink
                    to='/toys'className ={({isActive})=>
                    isActive ? activeStyle : underfined
                    }>
Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others'className ={({isActive})=>
                    isActive ? activeStyle : underfined
                    }>
Others
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar