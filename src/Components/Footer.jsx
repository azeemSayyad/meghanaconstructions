import {AiFillFacebook} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-sky-300 to-cyan-800 text-white w-full h-[260px] flex flex-col items-center justify-center p-4'>
    <p className='text-5xl text-white mb-3'>Logo</p>
    <div className='flex gap-4 m-3'>
        <AiFillFacebook size={"30px"}/>
        <FiInstagram size={"30px"}/>
        <FaTwitter size={"30px"}/>
    </div>
    <div className='flex m-4 gap-3'>
        <div>About Us</div>
        <div>Terms & Conditions</div>
        <div>Contact Us</div>
    </div>
    <div className='mb-3'>Copyright @ 2023 Meghana Constructions, All Rights Reserved.</div>
    <div className='mb-3'>Devoloped By Sayyad Azeem - 9676341652</div>
    </div>
  )
}

export default Footer