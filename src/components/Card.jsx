import React from 'react'

const Card = ({ datosForm }) => {
  return (
    <div>
      <h3>Hola {datosForm.usuario}</h3>
      <h3> sabemos que te gusta la pelicula
      </h3>
      <h1>{datosForm.nombrePelicula}</h1>
    </div>
  )
}

export default Card