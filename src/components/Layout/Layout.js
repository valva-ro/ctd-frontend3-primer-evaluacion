import React, { Component } from "react";
import Historia from "../Historia/Historia";
import Historial from "../Historial/Historial";
import Opciones from "../Opciones/Opciones";
import data from "../data.json";
import Swal from "sweetalert2";
import style from "./Layout.module.css"

export default class Layout extends Component {
  state = {
    opcionesElegidas: [],
    historiaActual: data[0],
  };

  componentDidMount = () => {
    Swal.fire({
      title: "Bienvenide a elige tu propia aventura ♥",
      confirmButtonColor: "#000",
    });
  };

  actualizarOpciones = (opcion) => {
    if (this.state.opcionesElegidas.length === this.props.limiteHistorias - 1) {
      Swal.fire({
        title: "Ya llegaste al final ¿querés volver a empezar?",
        showCancelButton: true,
        confirmButtonColor: "#000",
        cancelButtonColor: "#b6b6b6",
        confirmButtonText: "Siiiii",
        cancelButtonText: "Nop",
      }).then((result) => {
        if (result.isConfirmed) {
          this.setState({ opcionesElegidas: [], historiaActual: data[0] });
        }
      });
    } else {
      this.state.opcionesElegidas.push(opcion);
      this.setState({
        historiaActual: this.obtenerHistoriaSegunOpcion(opcion),
      });
    }
  };

  obtenerHistoriaSegunOpcion = (opcion) => {
    const { opcionesElegidas } = this.state;
    const opcionParseada = opcionesElegidas.length + 1 + opcion.toLowerCase();
    for (let d of data) {
      if (d.id === opcionParseada) return d;
    }
  };

  render() {
    const { historiaActual, opcionesElegidas } = this.state;
    return (
      <div className={style.layout}>
        <Historia texto={historiaActual.historia} />
        <Opciones
          manejadorOpciones={this.actualizarOpciones}
          opcionA={historiaActual.opciones.a}
          opcionB={historiaActual.opciones.b}
        />
        <Historial opcionesElegidas={opcionesElegidas} />
      </div>
    );
  }
}
