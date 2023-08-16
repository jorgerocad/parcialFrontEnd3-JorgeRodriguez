import { useState } from 'react';
import './App.css'
import Card from './components/Card'

function App() {

  const [pelicula, setPelicula] = useState({
    usuario: '',
    nombrePelicula: ''
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState({
    mensaje: "",
    valido: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValidation();
    setEnviado(true);
  };

  const inputValidation = () => {
    if (pelicula.usuario.charAt(0) === ' ' || pelicula.usuario.trim() === '') {
      return setError({ ...error, mensaje: "El nombre no debe iniciar con un espacio", valido: false });
    }

    if (pelicula.usuario.length < 3) {
      return setError({ ...error, mensaje: "Tu nombre no puede ser menor a 3 caracteres", valido: false });
    }

    if (pelicula.nombrePelicula.charAt(0) === ' ' || pelicula.nombrePelicula.trim() === '') {
      return setError({ ...error, mensaje: "La pelicula no debe iniciar con un espacio", valido: false });
    }

    if (pelicula.nombrePelicula.length < 6) {
      return setError({ ...error, mensaje: "El nombre de la pelicula no debe ser menor a 6 caracteres", valido: false });
    }

    return setError({ valido: true });
  }


  return (
    <div className='App'>
      <h1>Bienvenido al formulario de preguntas sobre que pelicula te gusta</h1>
      <form>
        <label for="user">Ingresa tu nombre</label>
        <input type="text" id="user" onChange={(e) => setPelicula({ ...pelicula, usuario: e.target.value })} />
        <label for="movie">Ingresa el nombre de la pelicula</label>
        <input type="text" id="movie" onChange={(e) => setPelicula({ ...pelicula, nombrePelicula: e.target.value })} />
        <button type='submit' onClick={handleSubmit}>Enviar</button>
      </form>
      {enviado && error.valido && <Card datosForm={pelicula} />}
      {enviado && !error.valido && <h3 style={{ color: 'red' }}>{error.mensaje}</h3>}
    </div>
  )
}

export default App
