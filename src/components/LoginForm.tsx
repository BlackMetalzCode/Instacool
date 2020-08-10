import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {reduxForm, InjectedFormProps} from 'redux-form'

import Inputs from './Inputs'
import Button from './Button'
import Center from './Center'

class LoginForm extends Component<InjectedFormProps> {
  public render() {
    const { handleSubmit } = this.props;
    return (
        <form onSubmit={handleSubmit}>
            <Inputs placeholder='Correo' label= 'Correo'/>
            <Inputs placeholder='Contraseña' label='Contraseña'/>
            <Button block={true}>Enviar</Button>
            <Center>
            <Link to='/register'>Registrarse</Link>
            </Center>
        </form>
    );
  }
}

export default reduxForm({
  form: 'login',
})(LoginForm);