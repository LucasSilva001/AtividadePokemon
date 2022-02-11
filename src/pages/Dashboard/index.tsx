import React, { useState, FormEvent } from "react";
import api from '../../services/api';

import { Container, Title, Form, Ceps } from "./styles";

interface CepProps {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

const Dashboard: React.FC = () => {
  const [newCep, setNewCep] = useState('');


  const pesquisarCEP = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try{
      const response = await api.get(`${newCep}/json/`);
      const cepDados = response.data;

      console.log(cepDados);
  } catch(err) {

  }
};

  return (
    <Container>
      <Title>Pesquise endereços por CEP</Title>

      <Form onSubmit={pesquisarCEP}>
        <input 
          type="form" 
          placeholder="Digite o CEP" 
          onChange={e => setNewCep(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Ceps>
        <a href="#">
          <p className="uf">SC</p>
          <div>
            <strong>Jaraguá do Sul</strong>
            <p>Rua: Isidoro Pedri</p>
            <p>Bairro: Barra do Rio Molha</p>
            <p>CEP: 89253-387</p>
          </div>
        </a>

        <a href="#">
          <p className="uf">SC</p>
          <div>
            <strong>Jaraguá do Sul</strong>
            <p>Rua: Isidoro Pedri</p>
            <p>Bairro: Barra do Rio Molha</p>
            <p>CEP: 89253-387</p>
          </div>
        </a>
        <a href="#">
          <p className="uf">SC</p>
          <div>
            <strong>Jaraguá do Sul</strong>
            <p>Rua: Isidoro Pedri</p>
            <p>Bairro: Barra do Rio Molha</p>
            <p>CEP: 89253-387</p>
          </div>
        </a>
      </Ceps>
    </Container>
  );
};

export default Dashboard;
