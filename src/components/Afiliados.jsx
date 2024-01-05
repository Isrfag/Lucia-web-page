import { dataAfiliados } from "../assets/dataAfiliados"

export const Afiliados = () => {
  return (
    <>
    <div name="afiliados" className="w-full h-full bg-gradient-to-b from-cyan-100 to-cyan-500
    text-black">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-800">Afiliados</p>
                <p className="py-6">Aquí algunas de las personas más importantes en mi vida, todas y cada una de ellas me han acompañado de una manera
                u otra y me quieren como el primer día.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px12 sm:px-0 pb-60">
                {dataAfiliados.map(item => (<div key={item.id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden ">
                    <img src={item.imgUrl} className="w-[500px] h-[500px] hover:scale-105"></img>
                    <div className="flex items-center justify-center">
                    <button className="py-6 text-xl text-rose-500 font-bold hover:scale-105">{item.grupo}</button>
                    </div>
                </div>)) }
            </div>

        
        </div>
    </div>
    </>
  )
}
