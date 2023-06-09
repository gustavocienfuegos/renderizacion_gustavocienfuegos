import Button from "react-bootstrap/Button"
import { Input } from '../Input/Input';
import "./FormAddWorker.css";
import {useState} from "react";

function FormAddWorker({onClickAddWorker}){
const [nombre, setNombre] = useState();
const [correo, setCorreo] = useState();


 const handlerOnClick =()=>{
  onClickAddWorker({
  nombre: nombre,
  correo: correo,
})
 }
  return (
    <div className="form">
      <Input type="text" 
      placeholder="Nombre Colaborador" 
      className="form__input"
      onChangeInput={(e)=>console.log(e.target.value)}
      />
      <Input type="text" 
      placeholder="Correo Colaborador" 
      className="form__input" 
      onChangeInput={(e)=>console.log(e.target.value)}
      />
      <Button variant="outline-primary"
       onClick={handlerOnClick}>
        Agregar Colaborador
        </Button>
      </div>
  );
  }

export default FormAddWorker;