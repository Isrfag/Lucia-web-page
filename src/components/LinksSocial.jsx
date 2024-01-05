import {links} from '../assets/links'

export const LinksSocial = () => {

    
  return (
    <>
    <div className='hidden md:flex flex-col top-[35%] left-0 fixed '>
        <ul>
            {links.map(({id,child,href,style}) => (
                    <li 
                        key={id} 
                        className = {
                        'flex justify-between items-center w-30 h-14 px-4 ml-[-90px]'+
                        ' bg-cyan-700  hover:ml-[-10px] duration-300' + ' ' + style
                        }
                        >
                        <a 
                            href={href} 
                            className={
                            'flex jusitify-between items-center'+
                            'w-full text-white'
                            }
                            target='_blank'
                            rel='noreferrer'
                        >
                            {child} 
                        </a>
                    </li>

            ))}
        </ul>
    </div>
    </>
  )
}
