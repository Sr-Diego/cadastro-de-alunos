import React, { createContext, useState, useContext } from 'react';

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
  const [dadosDoAluno, setDadosDoAluno] = useState({
    nome: "",
    sobrenome: '',
    curso: '',
    ano: ''
  });

  const atualizarDadosDoAluno = (novosDados) => {
    setDadosDoAluno(novosDados);
  };

  return (
    <Contexto.Provider value={{ dadosDoAluno, atualizarDadosDoAluno }}>
      {children}
    </Contexto.Provider>
  );
};

export const useDadosContexto = () => useContext(Contexto);