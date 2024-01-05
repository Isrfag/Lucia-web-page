import { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

export const NavBar = () => {

    //Controlar NavMovil o Escritorio
    const [nav,setNav] = useState(false);
  
    const links = [
        {
            id:1,
            link:'inicio'
        },
        {
            id:2,
            link:'historia'
        },
        {
            id:3,
            link:'rasgos'
        },
        {
            id:4,
            link:'afiliados'
        },
        {
            id:5,
            link:'profesión'
        },
        {
            id:6,
            link:'contacto'
        },
        
    ]

    return (
        <>
        <div className='flex justify-between items-center sm:w-full w-screen h-20 text-white fixed 
        bg-cyan-500 px-4 '>
            <div>
                <h1 className=' text-5xl font-signature text-white ml-2'>Lg</h1>
            </div>

            <ul className=' hidden md:flex'>{/*Navegacion escritorio */}

                {/*En la flecha puedes pasar como parametro las propiedades raw*/}
                {links.map( ({id,link}) => (
                    <li className='px-4 cursor-pointer capitalize font-medium text-rose-200 
                    hover:scale-105 duration-200' key={id}> <Link to={link} smooth  duration={500}>{link}</Link></li>
                 ))}
            </ul>

            {/*Navegacion Movil con FaBars*/}
            <div onClick={() => setNav(!nav) }className='cursor-pointer pr-4 z-10 text-rose-400
                md:hidden'>

                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}

            </div>

            {
                /*Control de la NavBar */
                nav  && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full
                        h-screen bg-gradient-to-b from-cyan-500 to-cyan-100 text-rose-400'>
                        {links.map(({id, link}) => (
                            <li key={id} className=' text-4xl px-4 py-6 cursor-pointer capitalize'>
                                <Link to={link} smooth duration={500} onClick={() => setNav(!nav)}>{link}</Link>
                            </li>
                        ))}
                    </ul>
            )}
        </div>
        </>
    )
}
