import React from 'react';
import Image from 'next/image';
import { BiMessage, BiMessageRounded, BiMessageRoundedAdd, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
const FeedCard: React.FC=()=>{
    return (
    <div className=' cursor-pointer border border-r-0 border-l-0 border-gray-600 p-4 hover:bg-slate-500 hover:text-white transition-all'>
        <div className="grid grid-cols-12">
            <div className="col-span-1">
            <Image src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            alt="user-image" height={50} width={50}
            className='rounded-2xl'/>
            </div>
            <div className="col-span-11">
                <h5>Ashish Parashar</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente velit, non rem et distinctio ea! Molestias facere doloribus quia facilis expedita sit possimus corrupti consequatur earum beatae, minus quo aliquam.
                </p>
                <div className='flex justify-evenly items-center mt-5 text-xl'>
             <div className='cursor-pointer hover:text-blue-200'><BiMessageRounded/></div>
             <div className='cursor-pointer hover:text-blue-200'><FaRetweet/></div>
             <div className='cursor-pointer hover:text-blue-200'><AiOutlineHeart/></div>
             <div className='cursor-pointer hover:text-blue-200'><BiUpload/></div>
            </div>
            </div>
            
        </div>
    </div>
    )
}
export default FeedCard;