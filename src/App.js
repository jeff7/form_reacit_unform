import React, {useRef} from 'react';
import './App.css';
import { Form } from '@unform/web'
import Input from './Components/Form/Input'
import {Scope} from '@unform/core'
import * as Yup from 'yup'

function App() {

  const formRef = useRef(null);

  async function handleSubmit(data, { reset }){
  
    try {
      
      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('Email inválido').required('Email obrigatório')
      });

      await schema.validate(data, {
        abortEarly:false,
      });
  
      console.log(formRef.current);

      formRef.current.setErrors({});
  
      reset();

    } catch (error) {
      if (error instanceof Yup.ValidationError)
      {
        const errorMessage = {};

        error.inner.forEach(err =>{
          errorMessage[err.path] = err.message;
        } );

        formRef.current.setErrors(errorMessage);
      }
    }
    
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <Form ref={formRef} onSubmit={handleSubmit} >
        <Input name="nome"/>
        <Input name="email" type="email" />

        <Scope path="adress">
          <Input name="rua"  />
          <Input name="number"  />
          <Input name="bairo"  />
          <Input name="cidade"  />
          <Input name="estado"  />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
