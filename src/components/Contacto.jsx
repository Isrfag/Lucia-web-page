export const Contacto = () => {
  return (
    <>
    <div name="contacto" className="w-full h-full bg-gradient-to-b from-cyan-100 to-cyan-500">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="py-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-800">Contacto</p>
                <p className="py-6 text-xl">Escríbeme si me necesitas para algo. (Le va a llegar a mi novio no te hagas ilusiones)</p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/f2e35f28-023c-4c76-8be2-007d9ef63434" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Introduce tu nombre" className="p-2 bg-transparent border-2
                    rounded-md text-black focus:outline-none" />
                    <input type="text" name="email" placeholder="Introduce tu email" className="p-2 bg-transparent border-2
                    rounded-md text-black focus:outline-none my-4" />
                    <textarea name="message" rows ="10" className="p-2 bg-transparent border-2 rounded-md text-rose-700 focus:outline-none">
                    </textarea>
                    <button className="text-black bg-gradient-to-b from-yellow-200 to-yellow-500 px-6 py-3 my-8 mx-auto flex items-center 
                    rounded-md hover:scale-110 cursor-pointer duration-300" >Enviar</button>
                </form>
            </div>

        </div>
    </div>    
    </>
  )
}
