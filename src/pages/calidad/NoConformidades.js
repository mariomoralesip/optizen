import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from '../../components/Input';


const fieldControls = [
    { label: 'Nombre:', placeholder: 'Juan' },
    { label: 'Apellido:', placeholder: 'Perez' },
    { label: 'NIF/DNI:', placeholder: 'NIF/DNI' },
    { type: 'date', label: 'Fecha de nacimiento:', placeholder: 'Fecha' },
    { label: 'Direccion:', placeholder: 'pje asdasd..' },
    { type: 'tel', label: 'Telefono:', placeholder: '12312-123' },
    { type: 'email', label: 'Email:', placeholder: 'ejemplo@gmail.com' }
];

export function NoConformidades(){

    return (
        <div className="max-w-7xl mx-auto p-5">
            <section className="mb-6">
                <div className="bg-white p-6 rounded-md shadow-md">
                    <h1 className="text-xl font-bold mb-4">DATOS PERSONALES</h1>
                    <form>
                        <div>
                            <div className="border p-4 flex justify-center items-center">Foto</div>
                            <button className="mt-2 bg-orange-500 text-white rounded p-2">CAMBIAR</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

                        {fieldControls.map(field => (
                            <Input label={field.label} placeholder={field.placeholder} type={field.type} />
                        ))}

                        <div>
                            <label for="pais" className="block mb-1">Pais:</label>
                            <select id="pais" className="border border-gray-300 rounded p-2 w-full">
                                <option>Chile</option>
                                <option>Alemania</option>
                            </select>
                        </div>
                        <div>
                            <label for="provincia" className="block mb-1">Provincia:</label>
                            <select id="provincia" className="border border-gray-300 rounded p-2 w-full">
                                <option>copiapo</option>
                                <option>temuco</option>
                                <option>berlin</option>
                            </select>
                        </div>
                    </div>

                </form>
            </div>
        </section>

        <section className="mb-6">
            <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="font-bold mb-4">DATOS EMPRESA / CUALIFICACIÓN</h2>
                <form>
                        <div>
                            <label for="centro" className="block mb-1">Centro:</label>
                            <select id="centro" className="border border-gray-300 rounded p-2 w-full">
                                <option>Oficina central</option>
                                <option>Oficina La Serena</option>
                                <option>Oficina Berlin</option>
                            </select>
                        </div>
                        <div>
                            <label for="departamento" className="block mb-1">Departamento:</label>
                            <select id="departamento" className="border border-gray-300 rounded p-2 w-full">
                                <option>RRHH</option>
                                <option>Terreno</option>
                                <option>Calidad</option>
                                <option>Prevencion de riesgos</option>
                                <option>Medioambiente</option>
                                <option>Maquinaria</option>
                                <option>Oficina tecnica</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        // Fecha de alta
                        <div>
                            <label for="fecha-alta" className="block mb-1">Fecha de alta:</label>
                            <input type="date" id="fecha-alta" placeholder="Fecha de alta" className="border border-gray-300 rounded p-2 w-full"/>
                        </div>
                        <div>
                            <label for="fecha-baja" className="block mb-1">Fecha de baja:</label>
                            <input type="date" id="fecha-alta" placeholder="Fecha de baja" className="border border-gray-300 rounded p-2 w-full"/>
                        </div>
                        <div>
                            <label for="estudios" className="block mb-1">Estudios:</label>
                            <input type="text" id="estudios" placeholder="Estudios" className="border border-gray-300 rounded p-2 w-full"/>
                        </div>
                        <div>
                            <label for="experiencia" className="block mb-1">Experiencia:</label>
                            <input type="text" id="experiencia" placeholder="Experiencia" className="border border-gray-300 rounded p-2 w-full"/>
                        </div>
                        <div>
                            <label for="habilidad" className="block mb-1">Habilidad:</label>
                            <input type="text" id="habilidad" placeholder="Habilidad" className="border border-gray-300 rounded p-2 w-full"/>
                        </div>
                        <div>
                            <label for="cargo" className="block mb-1">Cargo:</label>
                            <input type="text" id="cargo" placeholder="Cargo" className="border border-gray-300 rounded p-2 w-full"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>

        <section className="mb-6">
            <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="font-bold mb-4">DOCUMENTOS</h2>
                <form>
                    <input type="file" id="fileInput" name="fileInput" accept=".pdf, .doc, .docx"/>
                    <button type="button" onclick="uploadFile()">Subir Documento</button>
                </form>
                <p id="status"></p>
            </div>
        </section>

        <div className="flex justify-end gap-4">
            <button className="bg-yellow-500 text-white rounded p-3">LIMPIAR CAMPOS</button>
            <button className="bg-green-500 text-white rounded p-3">GUARDAR</button>
        </div>
    </div>

    )
}
