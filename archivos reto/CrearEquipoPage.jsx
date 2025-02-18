import { useFetchData } from '../core/cargarDatos';
import { useState } from 'react';

function CrearEquipoPage() {
    const { data: centros } = useFetchData('centros');

    const [equipo, setEquipo] = useState({
        nombre: '',
        grupo: 'A', // Grupo inicial
        centro_id: '',
        usuarioIdCreacion: 1,  // ID de usuario temporal hasta que haya autenticación
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEquipo((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Datos que se enviarán:", equipo);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/equipos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(equipo)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Errores de validación:", errorData.errors);
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            alert('Equipo creado exitosamente!');
            handleReset();
            console.log("Respuesta del servidor:", data);
        } catch (error) {
            console.error("Error al crear el equipo:", error);
            alert("Hubo un error al crear el equipo");
        }
    };

    const handleReset = () => {
        setEquipo({
            nombre: '',
            grupo: 'A',
            centro_id: '',
            usuarioIdCreacion: 1
        });
    };

    return (
        <div>
            <section className="inicio-paginas-section">
                <div className="inicio-paginas-content">
                    <h1 className="inicio-paginas-titulo">Crear Equipo</h1>
                    <p className="inicio-paginas-subtitulo">Crea un nuevo equipo para participar en el torneo</p>
                </div>
            </section>

            <section className="crear-equipo-section">
                <div className="container">
                    <h2 className="section-title">Datos del Equipo</h2>
                    <form className="crear-equipo-form" onSubmit={handleSubmit}>
                        <label htmlFor="nombreEquipo">Nombre del equipo</label>
                        <input type="text" id="nombreEquipo" name="nombre" value={equipo.nombre} onChange={handleChange} />
                        <br />

                        <label htmlFor="centro">Centro educativo</label>
                        <select name="centro_id" id="centro" value={equipo.centro_id} onChange={handleChange}>
                            <option value="">Seleccione un centro</option>
                            {centros.map((centro) => (
                                <option key={centro.id} value={centro.id}>{centro.nombre}</option>
                            ))}
                        </select>
                        <br />

                        <label htmlFor="grupo">Grupo</label>
                        <input type="text" id="grupo" name="grupo" value={equipo.grupo} onChange={handleChange} />
                        <br />
                        







                        

                        {/* <div id="form-entrenador">
                            <h3>Entrenador</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="nombreEntrenador">Nombre del entrenador</label>
                                    <input type="text" id="nombreEntrenador" />
                                    <br />
                                    <label htmlFor="apellido1">Primer apellido</label>
                                    <input type="text" id="apellido1" />
                                    <br />
                                    <label htmlFor="apellido2">Segundo apellido</label>
                                    <input type="text" id="apellido2" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="dni">DNI</label>
                                    <input type="text" id="dni" />
                                    <br />
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" />
                                    <br />
                                    <label htmlFor="telefono">Telefono</label>
                                    <input type="text" id="telefono" />
                                </div>
                            </div>
                        </div>
                        <h2>Detalles de los jugadores</h2>
                        <div id="form-jugadores">
                            <div className="row">
                                <h3>Jugador 1 (Capitan)</h3>
                                <div className="col-md-6">
                                    <label htmlFor="nombreEntrenador">Nombre del entrenador</label>
                                    <input type="text" id="nombreEntrenador" />
                                    <br />
                                    <label htmlFor="apellido1">Primer apellido</label>
                                    <input type="text" id="apellido1" />
                                    <br />
                                    <label htmlFor="apellido2">Segundo apellido</label>
                                    <input type="text" id="apellido2" />
                                    <br />
                                    <label htmlFor="estudio">Estudio:</label>
                                    <select name="curso" id="curso">
                                        <option value="curso">Curso</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="tipo">Tipo</label>
                                    <select name="tipo" id="tipo">
                                        <option value="capitan">Capitan</option>
                                        <option value="jugador">Jugador</option>
                                    </select>
                                    <br />
                                    <label htmlFor="dni">DNI</label>
                                    <input type="text" id="dni" />
                                    <br />
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" />
                                    <br />
                                    <label htmlFor="telefono">Telefono</label>
                                    <input type="text" id="telefono" />
                                </div>
                                {[...Array(9)].map((_, i) => (
                                    <div key={i+2} className="row">
                                        <h3>Jugador {i+2}</h3>
                                        <div className="col-md-6">
                                            <label htmlFor="nombreEntrenador">Nombre del jugador</label>
                                            <input type="text" id="nombreEntrenador" />
                                            <br />
                                            <label htmlFor="apellido1">Primer apellido</label>
                                            <input type="text" id="apellido1" />
                                            <br />
                                            <label htmlFor="apellido2">Segundo apellido</label>
                                            <input type="text" id="apellido2" />
                                            <br />
                                            <label htmlFor="estudio">Estudio:</label>
                                            <select name="curso" id="curso">
                                                <option value="curso">Curso</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="tipo">Tipo</label>
                                            <select name="tipo" id="tipo">
                                                <option value="capitan">Capitan</option>
                                                <option value="jugador">Jugador</option>
                                            </select>
                                            <br />
                                            <label htmlFor="dni">DNI</label>
                                            <input type="text" id="dni" />
                                            <br />
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" />
                                            <br />
                                            <label htmlFor="telefono">Telefono</label>
                                            <input type="text" id="telefono" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> */}



                        <button type="submit" className="btn btn-success">Enviar solicitud</button>
                        <button type="button" className="btn btn-danger" onClick={handleReset}>Borrar datos</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
export default CrearEquipoPage;