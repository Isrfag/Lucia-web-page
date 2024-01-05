import LuciPeque from '../public/pequelucia.jpg'
import LuciPayasa from '../public/lpayasa.jpg'
import LuciMedica from '../public/ltrabajobest.jpg'
import {FaArrowRight} from 'react-icons/fa'

export const Historia = () => {
  return (
    <>
    <div name='historia' className="w-full h-full bg-gradient-to-b from-cyan-100 to-cyan-500
    text-black">
        
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            
            <div className="pb-8 flex md:justify-normal justify-center">
                <p className="text-4xl font-bold inline border-b-4 border-gray-800"
                >
                    Mi Historia
                </p>
            </div>
        <article className="text-xl mt-20">

            <p>De Ceuta a Granada. De la felicidad a la tristeza. Del bienestar a la pérdida del individuo. Soy Lucía 
            una persona risueña, buena, con un gran sentido del humor y el corazón más grande que el mundo ha sido 
            capaz de darle a una persona, no obstante no siempre fue así. En mi niñez y mi adolescencia fuí muy feliz,
            viví grandes aventuras y era monísima,¿no me creeís? Miradme entonces.</p>
            <div className='flex justify-center items-center mt-8 pb-6'>
                <img src={LuciPeque} className='w-1/2 md:w-1/3 rounded-xl shadow'></img>
            </div>
            <p>¿Preciosa verdad? Crecí hasta convertirme en una supermodelo y ser la mujer más guapa de este planeta(Nota:opinión
            del desarrollador). Pero la vida es realmente dura y a mis 20 años entré en una gran depresión. </p>

            <br/> <br/>
            <p>Los siguientes años de mi vida fueron muy complicados, estuve rodeada de personas que no querían lo mejor para mi, al 
            contrario, buscaban aprovecharse de mi bondad y de el miedo que desarrollé durante mi depresión a perder a la gente que
            me rodeaba. Así fue como estuve cargando con una gran cantidad de relaciones tóxicas en mi vida, relaciones que acabaron
            por explotar cuando mi pareja me dejó y mi mejor amiga se fue,todo al mismo tiempo. Así llegó la útlima mitad de 2022.</p>

            <br/><br/>
            <p>La época de mi vida en la que realmente me plantee dejar mis estudios, recordemos que yo estaba en pleno primer cuatrimestre
            de 5to de medicina, el año más difícil de la carrera. Sentía que no podía más, decepción tras decepción y encima sufrimos la pérdida
            de una compañera de la facultad. Realmente no sentía tener las fuerzas ni para sacar el año, ni para tirar de mi misma. El Inicio de 
            2023 no fue mucho mejor, volví a sufrir una gran decepción. No obstante fue mi punto de quiebre,a partir de ese momento decidí luchar
            por salir del pozo en que me encontraba, no fue un camino fácil, caí muchas veces, pero gracias a que no me rendí y a tener la 
            guía de alguien que apostó por mi desde el minuto 0 conseguí salir. Hoy en día un año después a principios de 2024
            puede decir que he sobrevivido, pero no he parado ahí, ha comenzado la lucha más grande de mi vida, la lucha por convertirme en mi mejor
            yo, una Lucía que se quiere y que se respeta, que es capaz de conseguir lo que sea que se proponga y que no se deja avasallar por 
            absolutamente nada ni nadie.</p>

            <br/><br/>

            <p>Hoy en día tengo claro quien soy y a donde voy. Tengo una familia que me quiere, un novio que iría a pelear con el mismo demonio por mi,
            se poner límites en mis relaciones, limites sanos para mi. Y estoy rodeada de gente que me quiere y hace por estar conmigo.
            Soy una luchadora de la cabeza a los pies. Ya no soy más esa payasa que dejaba que cualquiera le pasase por encima. Ahora soy un mujeron, voy 
            a ser la mejor médica de España, la mejor amiga, la mejor hija, la mejor Lucía, porque nos lo merecemos yo y mis seres queridos.</p>

            <br/><br/>
            <h2 className='text-2xl text-gray-300 font-bold inline border-b-4 border-gray-300'>Esto no ha hecho mas que empezar</h2> 
            <br/><br/>

        </article>

        <div className='flex flex-row justify-between items-center'>
            <img src={LuciPayasa} alt='payasa' className=' rounded-full w-1/4 h-1/4 md:w-1/6 md:h-1/6"'></img>
            <p className='text-8xl text-white'> <FaArrowRight/> </p>
            <img src={LuciMedica}  alt='medica' className=' rounded-full w-1/2 h-1/2 md:w-1/4 md:h-1/4"'></img>
        </div>
        <div className='text-2xl text-white pb-56'>
            <br/>
            <p>Representación gráfica de mi cambio (2023-2024)</p>
        </div>
       
        
     </div>
    </div>
    </>
  )
}
