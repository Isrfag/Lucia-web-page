import {NavBar} from './components/NavBar'
import {Inicio} from './components/Inicio'
import { LinksSocial } from './components/LinksSocial'
import { Historia } from './components/Historia'
import { Rasgos } from './components/Rasgos'
import { Afiliados } from './components/Afiliados'
import { Profesion } from './components/Profesion'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <div>
        <NavBar></NavBar>
        <Inicio></Inicio>
        <Historia></Historia>
        <Rasgos></Rasgos>
        <Afiliados></Afiliados>
        <Profesion></Profesion>
        <Contacto></Contacto>
        <Footer></Footer>
        
        <LinksSocial></LinksSocial>
      </div>
      
    </>
  )
}

export default App
