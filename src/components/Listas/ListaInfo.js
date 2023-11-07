import { useDadosContexto } from '../context/CadastroContext';
import React, { useState, useEffect } from 'react';
import './ListaInfo.css';

export default function ListaInfo() {
  const { dadosDoAluno } = useDadosContexto();

  const [alunos, setAlunos] = useState([
    { nome: 'Diego', sobrenome: 'Soares', ano: '2M' },
    { nome: 'José', sobrenome: 'Junior', ano: '3V' }
  ]);

  useEffect(() => {
    if (dadosDoAluno.curso === "Informática") {
      setAlunos(prevAlunos => [
        ...prevAlunos,
        {
          nome: dadosDoAluno.nome,
          sobrenome: dadosDoAluno.sobrenome,
          ano: dadosDoAluno.ano
        }
      ]);
    }
  }, [dadosDoAluno]);

  return (
    <div className="Info">
      <h2 className='InfoH2'>Informática</h2>
      <ul className='ul'>
        {alunos.map((aluno, index) => (
          <li key={index}>{aluno.nome} {aluno.sobrenome} - {aluno.ano}</li>
        ))}
      </ul>
    </div>
  );
}
