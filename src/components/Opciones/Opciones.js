import React, { Component } from 'react';
import style from "./Opciones.module.css";

export default class Opciones extends Component {
    render() {
        const { manejadorOpciones } = this.props;
        return (
          <div className={style.opciones}>
            <div className={style.opcion}>
              <button
                id="A"
                className={style.boton}
                onClick={() => manejadorOpciones("A")}
              >
                A
              </button>
              <h2>{this.props.opcionA}</h2>
            </div>
            <div className={style.opcion}>
              <button
                id="B"
                className={style.boton}
                onClick={() => manejadorOpciones("B")}
              >
                B
              </button>
              <h2>{this.props.opcionB}</h2>
            </div>
          </div>
        );
    }
}
