import React, {Component} from "react";
import "./css/index.css";

class App extends Component {
  state = {nombre: "", email: "", esAdmin:"", genero:""};

  valueToState = ({name, value, checked, type}) => {
    this.setState(state: () => {
      return { [name]: type == "checkbox" ? checked : value};
    });
  };

render() { 
  return (
    <div>
      <pre>{JSON.stringify(this.state, replacer:null, space:2)}</pre>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input
        name="nombre"
        type="text"
        placeholder="Ingredsa tu nombre"
        onChange={event => this.valueToState(event.target)}
        />
        <label htmlFor="email">Correo Electronico</label>
        <input
        name="email"
        type="email"
        placeholder="ejemplo@gmail.com"
        onChange={event => this.valueToState(event.target)}
        />
        <label>Es Administrador?
        <input type="checkbox" name="esAdmin"/>
        </label>
        <legend>Genero</legend>
        <label>
          Masculino
          <input 
          type="radio"
          name="genero"
          value={'m'}/>
          </label>
          <label>
          Femenino
          <input 
          type="radio"
          name="genero"
          value={'f'}/>
          </label>
      </form>
    </div>
  );
}

}


export default App;