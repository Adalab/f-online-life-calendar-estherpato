import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Edition.css';

class Edition extends Component {
    render() {
        const {
            onSubmitHandler,
            radioButtonHandler,
            inputDateHandler,
            cancelButtonHandler,
            status
        } = this.props;
        let messageClass = status === ':)' ? null : 'hidden-message';

        return (
            <Fragment>
                <form
                    onSubmit={onSubmitHandler}
                    className='form-container'
                >
                    <label
                        htmlFor="date"
                        name="date"
                    >
                        Fecha *
                </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        onChange={inputDateHandler}
                        required
                    />

                    <label name="status">Estado *</label>
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
                            required
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

                    <div className={messageClass}>
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
                    <button type="submit" className="form-btn accept-btn">Aceptar</button>
                </form>
                <button onClick={cancelButtonHandler}
                    className="form-btn cancel-btn"
                >Cancelar</button>
                <Link to="/" className="form-btn back-btn">Volver</Link>
            </Fragment>
        );
    }
}

export default Edition;