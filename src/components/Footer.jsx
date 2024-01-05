import {links} from '../assets/links'

export const Footer = () => {
  return (
    <>
    <div className="bg-cyan-700 md:hidden">
        <div className='flex flex-col justify-center items-center'>
        <ul>
            {links.map(({id,child,href}) => (
                    <li 
                        key={id} 
                        className = {
                        'flex justify-between items-center w-300 h-14 px-4 '+
                        ' bg-cyan-700 '
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

    </div>
    </>
  )
}
