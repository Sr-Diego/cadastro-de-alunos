import React, { createContext, useState, useContext } from 'react';

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
  const [Aluno, setAluno] = useState([]);

  function handleClick(nome, sobrenome, curso, ano){
    alert("---Autenticado---");
    const novoAluno = {
      nome: nome,
      sobrenome: sobrenome,
      curso: curso,
      ano: ano,
    };
    setAluno([...Aluno, novoAluno]);
  };

  return (
    <Contexto.Provider value={{ Aluno, handleClick }}>
      {children}
    </Contexto.Provider>
  );
};

export const useDadosContexto = () => useContext(Contexto);