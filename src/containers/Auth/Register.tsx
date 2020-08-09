import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Card from '../../components/Card'
import Container from '../../components/Container'
import Inputs from '../../components/Inputs'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Center from '../../components/Center'
class Register extends Component {
    render() {
        return (
            <Container center={true}>
            <Card>
              <Title>Registro</Title>
              <Inputs placeholder='Correo' label= 'Correo'/>
              <Inputs placeholder='Contrase;a' label='Contrase;a'/>
              <Button block={true}>Enviar</Button>
              <Center>
              <Link to='/'>Iniciar Sesion</Link>
              </Center>
            </Card>
          </Container>
        );
    }
}

export default Register;