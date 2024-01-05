import {data2} from '../assets/data2'

export const Rasgos = () => {
  return (
    <>
    <div name='rasgos' className="w-full h-full bg-gradient-to-b from-cyan-500 to-cyan-100
    text-black">
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        <div className='pb-8 flex md:justify-normal justify-center'>
            <p className='text-4xl text-black font-bold inline border-b-4 border-gray-800'>Mis rasgos principales son</p>
        </div>

            <div>
                <div className='flex flex-row justify-between items-center'>
                {data2.map(item => (
                                    <div key={item.id}>
                                        <img className='w-[300px] h-[150px] md:w-[600px] md:h-[300px] rounded-full md:p-5' src={item.imgUrl}></img>
                                        <p className='text-2xl text-white text-center mt-4 pb-20'>{item.desc}</p>
                                    </div>
                                    ))}
                
                </div>
                <div className='pb-56'>
                    <p className=' text-sm text-center text-gray-700'>Y otros muchos más, que si el desarrollador(mi novio) se pone a enumerar no acabamos</p>
                </div>
        </div>
     </div> 
    </div>
    </>
  )
}
