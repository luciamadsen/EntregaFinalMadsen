import React, { useEffect } from 'react'

const Nosotros = () => {
    useEffect(() => {

        const clickear = () => {
          console.log("Click");
        }
    
        window.addEventListener("click", clickear)
    
        return () => {
          window.removeEventListener("click", clickear)
        }
    
      }, [])
  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <hr />
        <p className="padd">Bayside Team es una organización de esports dedicada a la formación y el desarrollo de jugadores semi profesionales. Nuestra misión es nutrir el talento emergente y preparar a nuestros jugadores para competir en el escenario internacional. En Bayside Team, no solo entrenamos a jugadores, forjamos estrellas.</p>
        <br />
        <p className='padd'>No solo preparamos a nuestros jugadores para el éxito en competencias locales e internacionales, sino que también los impulsamos hacia oportunidades globales. Trabajamos en estrecha colaboración con equipos más grandes en países más desarrollados para identificar y vender jugadores talentosos que han surgido de nuestras filas.</p>
    </div>
  )
}

export default Nosotros