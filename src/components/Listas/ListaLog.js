import {useDadosContexto} from '../context/CadastroContext';
import './ListaLog.css';

export default function ListaLog(){

    const {dadosDoAluno} = useDadosContexto();
    const listLogistica = ["Diego", "Ivanildo"]
    const listSobrenomeLog = ["Rodrigues", "Silva"]
    const anoLog = ["3M" , "4V"]
    
    if(dadosDoAluno.curso === "Logística")
    { 
        listLogistica.push(dadosDoAluno.nome); listSobrenomeLog.push(dadosDoAluno.sobrenome);
        anoLog.push(dadosDoAluno.ano);
    }
    return(
        <div className="Log">
            <h2 className='LogH2'>Logistica</h2>
            <ul className='ul'>
                {listLogistica.map((aluno, index) => (
                <li key={index}>{aluno} {listSobrenomeLog[index]} - {anoLog[index]}</li>))}
            </ul>
        </div>
    )
}