import medica1 from '../assets/pijama.jpg'
import medica2 from '../assets/ltrabajo.jpg'
import medica3 from '../assets/ltrabajobest.jpg'
import dormida from '../assets/ldormida.jpg'
import india from '../assets/india.jpg'
import jason from '../assets/calvasesina.jpg'

export const Profesion = () => {
  return (
    <>
    <div name="profesión" className="w-full h-full bg-gradient-to-b from-cyan-500 to-cyan-100
    text-black">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="py-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-800">Profesión</p>
                <p className="py-6 text-xl">Hay gente que siente que debe ser médico desde pequeño, vocación por la profesión, no fue mi caso. Yo no tenía muy
                claro que quería hacer con mi vida, me gustaba la informática, también me plantee ser policía, que cosas eh. Pero hay algo que siempre
                he querido y he buscado hacer, el bien.
                <br/><br/>
                Por querer hacer el bien me decanté ha hacer medicina, no ha sido fácil, de hecho me he planteado dejarlo unas cuantas veces, pero soy
                una persona con un gran corazón e inteligencia, ambos son grandes dones no privilegios y si puedes usarlos para el bien de los demás 
                estatás contribuyendo a un bien mayor. Habrá quien me llame idealista, pero me la suda, yo soy una gran persona y se que seré una gran
                médico.<br/> Mi bondad e idealismo mio me han traído grandes cosas a mi vida, mi novio me ama por lo que soy, yo me siento mejor siendo
                quien creo que debo ser, y atraígo a mi vida lo que soy.<br/>
                <br/>
                ¿Qué quien soy? Soy Lucía Gómez Morón, y soy una super heroína, voy a ser médica y mi vocación es ayudar a la gente.
                </p>
            </div>
            <div className='flex justify-between items-center'>
                <img src={medica1} alt='medicina' className='md:w-[300px] md:h-[400px] sm:w-[200px] sm:h-[300px] w-[150px] h-[200px] rounded-lg'></img>
                <img src={medica2} alt='medicina' className='md:w-[300px] md:h-[400px] sm:w-[200px] sm:h-[300px] w-[150px] h-[200px] rounded-lg'></img>
                <img src={medica3} alt='medicina'className='md:w-[300px] md:h-[400px] sm:w-[200px] sm:h-[300px] w-[150px] h-[200px] rounded-lg'></img>
            </div>

            <div className='py-12 flex flex-col justify-center items-center pb-72'>
                <p className='text-2xl font-bold'>No obstante se me ha visto ejerciendo algunas profesiones más...</p>
                
                <div className='flex flex-row justify-between items-center mt-5'>
                    <div className='px-3'>
                    <img src={dormida} alt='medicina'className='md:w-[300px] md:h-[400px] sm:w-[200px] sm:h-[300px] w-[150px] h-[200px] rounded-lg'></img>
                    <p className='font-bold text-center pt-2'>Bella durmiente</p>
                    </div>
                    <div className='px-3'>
                    <img src={india} alt='medicina'className='md:w-[300px] md:h-[400px] sm:w-[200px] sm:h-[300px] w-[150px] h-[200px] rounded-lg'></img>
                    <p className='font-bold text-center pt-2'>India</p>
                    </div>
                    <div className='px-3'>
                    <img src={jason} alt='medicina'className='md:w-[300px] md:h-[400px] sm:w-[200px] sm:h-[300px] w-[150px] h-[200px] rounded-lg'></img>
                    <p className='font-bold text-center pt-2'>Actriz de Horror</p>
                    </div>
                </div>

            </div>

        </div>
    
    </div>
    </>
  )
}
