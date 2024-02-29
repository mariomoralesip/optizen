function BotonGuardar(props) {

  const showAlert = () => alert(props.mensaje || 'Guardado')

  return (
     <button style={{background: props?.color || ''}} onClick={() => showAlert()}>Guardar</button>
  );
}

export default BotonGuardar;
