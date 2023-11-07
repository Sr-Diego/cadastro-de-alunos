import {useDadosContexto} from '../context/CadastroContext';
import './ListaEdif.css';

export default function ListaEdif(){
    const {dadosDoAluno}=useDadosContexto();
    
    const listEdifica = ["Soares", "Ivanildo"]
    const listSobrenomeEdif = ["Rodrigues", "Junior"]
    const anoEdif = ["3M" , "4V"]

    if(dadosDoAluno.curso === "Edificação")
    {
        listEdifica.push(dadosDoAluno.nome); listSobrenomeEdif.push(dadosDoAluno.sobrenome);
        anoEdif.push(dadosDoAluno.ano);
    }
    return(
        
        <div className="Edifica">
            <h2 className='EdificaH2'>Edificação</h2>
            <ul className='ul'>
                {listEdifica.map((aluno, index) => (
                <li key={index}>{aluno} {listSobrenomeEdif[index]} - {anoEdif[index]}</li>))}
            </ul>
         </div>
    );
}