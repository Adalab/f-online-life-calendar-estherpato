import React, { Component } from 'react';
import '../stylesheets/Edition.css';

class Edition extends Component {
    render() {
        return (
            <form>
                <label htmlFor="date" name="date">Fecha</label>
                <input type="date" name="date" id="date" />

                <label name="status" >Estado</label>
                <label htmlFor="happy" name="status" >:)</label>
                <input type="radio" name="status" id="happy" />
                <label htmlFor="sad" name="status" >:(</label>
                <input type="radio" name="status" id="sad" />

                <label htmlFor="message" name="message">Mensaje</label>
                <input id="message" type="text" name="message" placeholder="¿Por qué es un buen día?"/>

                <button type="submit">Aceptar</button>
                <button type="reset">Cancelar</button>
            </form>
        );
    }
}

export default Edition;