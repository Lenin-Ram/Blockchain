import react, {Component} from "react";
import "./css/index.css";

class App extends Component {
  state = {nombre: "", email: "", esAdmin:""};
  valueToState = ({name, value, checked, type}) => {
    this.setState(state: () => {
      return { [name]: value}
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
      </form>
    </div>
  );
}

}


export default App;