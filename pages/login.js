import React, { useContext, useState } from "react";
import CartContext from "../contexts/CartContext"
import UserContext from "../contexts/UserContext"
import SignUp from '../components/SignUp'
import Account from '../components/Account'
import SignIn from '../components/SignIn';

export default function Login() {
    const [user, setUser] = useContext(UserContext)
    const [cart, setCart] = useContext(CartContext)
    const [click, setClick] = useState(null)
    const [form, setForm] = useState({
        email: '',
        password: ''
        })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div className="grid grid-cols-3 mt-20">
            <div className="col-span-2 bg-cover bg-auth w-full">
            </div>
            <div className="bg-stone-100">
                <div className="ml-24">
                    {click == null ? <Account user={user} setClick={setClick} handleChange={handleChange} form={form}/> : click==true? <SignUp form={form} handleChange={handleChange} setClick={setClick}/> : <SignIn setClick={setClick}/>}
                </div>
            </div>
        </div>
    );

}