import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Edition.css';

class Edition extends Component {
    render() {
        const { onSubmitHandler, radioButtonHandler } = this.props;
        return (
            <form onSubmit={onSubmitHandler}>
                <label
                    htmlFor="date"
                    name="date"
                >
                    Fecha
                </label>
                <input
                    type="date"
                    name="date"
                    id="date"
                />

                <label name="status">Estado</label>
                <label
                    htmlFor="happy"
                    name="status"
                >
                    <input
                        type="radio"
                        name="status"
                        id="happy"
                        value=":)"
                        onChange={radioButtonHandler}
                    />
                    :)
                </label>
                <label
                    htmlFor="sad"
                    name="status"
                >
                    <input
                        type="radio"
                        name="status"
                        id="sad"
                        value=":("
                        onChange={radioButtonHandler}
                    />
                    :(
                </label>

                <div >
                    <label
                        htmlFor="message"
                        name="message"
                    >
                        Mensaje
                </label>
                    <input
                        id="message"
                        type="text"
                        name="message"
                        placeholder="¿Por qué es un buen día?"
                    />
                </div>
                {/* <Link to="/"> */}
                    <button type="submit"><Link to="/">Aceptar</Link></button>
                    <button type="reset"><Link to="/">Cancelar</Link></button>
                {/* </Link> */}
            </form>
        );
    }
}

export default Edition;