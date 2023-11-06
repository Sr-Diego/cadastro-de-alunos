import './Registro.css';
import { useDadosContexto } from '../context/CadastroContext';
export default function Registro() {
    const {dadosDoAluno} = useDadosContexto();
    
    const listNomeInfo = ["Diego", "José"]
    const listSobrenomeInfo = ["Soares", "Junior"]
    const anoInfo = ["2M" , "3V"]
    if(dadosDoAluno.curso ==="Informática")
    {
        listNomeInfo.push(dadosDoAluno.nome); listSobrenomeInfo.push(dadosDoAluno.sobrenome);
        anoInfo.push(dadosDoAluno.ano);
    }
    const ListAlunosInfo = listNomeInfo.map((aluno, index) => (
        <li key={index}>{aluno} {listSobrenomeInfo[index]} - {anoInfo[index]}</li>
    ));

    const listEdifica = ["Soares", "Ivanildo"]
    const listSobrenomeEdif = ["Rodrigues", "Junior"]
    const anoEdif = ["3M" , "4V"]
    if(dadosDoAluno.curso === "Edificação")
    {
        listEdifica.push(dadosDoAluno.nome); listSobrenomeEdif.push(dadosDoAluno.sobrenome);
        anoEdif.push(dadosDoAluno.ano);
    }
    const ListAlunosEdif = listEdifica.map((aluno, index) => (
        <li key={index}>{aluno} {listSobrenomeEdif[index]} - {anoEdif[index]}</li>
    ));

    const listLogistica = ["Diego", "Ivanildo"]
    const listSobrenomeLog = ["Rodrigues", "Silva"]
    const anoLog = ["3M" , "4V"]
    if(dadosDoAluno.curso === "Logística")
    { 
        listLogistica.push(dadosDoAluno.nome); listSobrenomeLog.push(dadosDoAluno.sobrenome);
        anoLog.push(dadosDoAluno.ano);
    }
    const ListAlunosLog = listLogistica.map((aluno, index) => (
        <li key={index}>{aluno} {listSobrenomeLog[index]} - {anoLog[index]}</li>
    ));

    return (
        <div className="Principal">
            <div className="Info">
                <h2 className='InfoH2'>Informática</h2>
                <ul className='ul'>
                   {ListAlunosInfo} 
                </ul>
            </div>
            <div className="Edifica">
                <h2 className='EdificaH2'>Edificação</h2>
                <ul className='ul'>
                {ListAlunosEdif}
                
                </ul>
            </div>
            <div className="Log">
                <h2 className='LogH2'>Logistica</h2>
                <ul className='ul'>
                {ListAlunosLog}
                </ul>
            </div>
        </div>
    )
}
