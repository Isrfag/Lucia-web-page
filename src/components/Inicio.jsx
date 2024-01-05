import {data} from '../assets/data'
import {useRef, useState, } from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'


export const Inicio = () => {

  const listRef = useRef()

  const [image,setImage] = useState(0)

  //Comprobacion de que la imagen llega bien
  const cantidad = data?.length
  if(!Array.isArray(data) || cantidad === 0) return

  const sigImg = () => {
    setImage(image === cantidad-1 ? 0 : image + 1)
  }

  setTimeout (sigImg,6000)


  return (
    <>
    <div name= "inicio" className='  h-screen w-full bg-gradient-to-b via-cyan-500 from-cyan-500 to-cyan-100'>
      
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center
      h-full px-4 md:flex-row'> 
        <div className='flex flex-col justify-center h-full mt-60 md:mt-0'>
          
          <h2 className='text-4xl md:text-7xl font-bold text-white' > Soy una persona Maravillosa</h2>
          
          <p className='text-rose-100 py-4 max-w-md'> Soy Lucía Gómez Morón, estudiante de medicina, amante de los animalitos, sobre todo
            los michis, amiga de mis amigos (los que se lo merecen) y la mejor novia y persona del 
            universo.(Esto es opinión de mi novio y si alguien quiere contrastar que se enfrente al él).
          </p>

          <div>
            <Link to='historia' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
            bg-gradient-to-r from-rose-300 to-blue-500 cursor-pointer'>
              ¿Quieres saber más de mi? 
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                </span>
            </Link>

          </div>
        </div>

        <div className='flex flex-row justify-center items-center md:mb-0 mb-12 sm:mt-0 mt-12'>  
              <ul ref={listRef}>
                {
                  data.map((item) => {
                    return (
                      <div key={item.id} className={`max-w-[100%] h-auto transition-all duration-300 ${image===item.id ? 'opacity-1':'opacity-0'}`}>
                        {item.id===image &&(
                        <img src={item.imageurl} alt='Lucia perfil' className='rounded-2xl mx-auto w-[300px] h-[400px] md:w-[600px] md:h-[500px]'></img>
                        )}   
                      </div>
                      )
                  })
                }
              </ul>
        </div>

      </div>
    </div>    

    
    
    </>
  )
}
