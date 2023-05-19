import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import Plus from '../public/icons/plus.svg'
import Minus from '../public/icons/minus.svg'


export default function CartItemCard({cartItem, handleDeleteData, updateCartItem}){
    const { instrumental } = cartItem
    console.log(cartItem)

    // const handleSwitch = (id) =>{
    //     fetch(`/api/orders/${cartItem.id}`,{
    //         method: 'PATCH',
    //         headers:  {
    //             "Content-Type": "application/json",
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             lease_id: id
    //         }),
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         updateCartItem({...cartItem, lease: data})
    //     })
    // }

    const handleDelete = (e) =>{
        fetch(`/api/orders/${cartItem.id}`,{
        method: 'DELETE'
        })
        .then((res) => {
            if (res.ok)
            handleDeleteData(cartItem.id)
        })
    }

    return (
        <div>
            <div className="flex pt-5">
                <div className='ml-5'>
                    <div className='flex justify-between'>
                        <Link href={`/instrumentals/${cartItem.lease.instrumental.id}`}>
                            <p className='font-bold'>{cartItem.lease.instrumental.title}</p>
                        </Link>
                        <p className='text-base pl-48'>$ {cartItem.lease.price}.00</p>
                    </div>
                    <div className='pt-5 pb-5'>
                        <p className='text-neutral-500'>{cartItem.lease.contract_info}</p>
                    </div>
                    <button className="text-sm font-medium underline" value={cartItem.id} onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}