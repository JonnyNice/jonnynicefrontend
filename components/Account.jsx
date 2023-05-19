import React from "react"

export default function account({user, handleChange, setClick, form}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        setClick(true)
    }

    const emails = "I won't send you emails about anything unless you check the box"
    const discount = "You'll get a deal if you have an account"

        return (
            <>
            {user?.email === "Guest" || user == null ?
            <div className="h-screen">
                <h1 className="grid grid-cols-2 font-bold text-4xl pb-2 pt-40">
                    Account
                </h1>
                <div className="py-5 mr-10">
                    <form onSubmit={handleSubmit} className="w-96 justify-center">
                        <input onChange={handleChange} className="inline-flex w-[500px] h-14 bg-white px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="username" type="text" placeholder="Email Address" name="email" value={form.email}/>
                        <div className='items-center text-center mt-2'>
                            <button className='w-[500px] bg-black rounded-full text-white text-base font-medium m-2 py-3 px-10 mb-5 mt-5'>Next</button>
                        </div>
                    </form>
                    <div className='mt-16'>
                        <h1 className="text-sm font-bold pb-2">Make an Account</h1>
                        <p className='text-sm text-neutral-500 font-medium mb-2'>Sign up so you can have:</p>
                        <ul className="list-disc ml-10  text-neutral-500">
                            {/* <li className="text-sm"><em className="font-bold not-italic">Checkout express:</em> safe and secure shopping</li> */}
                            <li className="text-sm"><em className="font-bold not-italic">Online management:</em> Manage your purchases and contracts</li>
                            <li className="text-sm"><em className="font-bold not-italic">Special Discount:</em> {discount}</li>
                            <li className="text-sm"><em className="font-bold not-italic">Newsletter:</em> {emails}</li>
                        </ul>
                    </div>
                </div>
            </div> : <div className="h-screen flex items-center justify-center">
                <h1 className="font-bold text-4xl pb-2 flex-1 text-center pb-40">
                    Welcome, {user?.email}
                </h1>
                <div className='py-5 mr-10'>
                </div>
            </div>}</>
        )
    }