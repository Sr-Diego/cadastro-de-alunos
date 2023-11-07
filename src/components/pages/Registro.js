import './Registro.css';
import { useDadosContexto } from '../context/CadastroContext';
export default function Registro() {
    const {Aluno} = useDadosContexto();
    
    return (
        <div className="Principal">
            <div className="Info">
                <h2 className='InfoH2'>Informática</h2>
                <ul className='ul'>
                {
                Aluno.map((aluno, index) => {
                    if (aluno.curso === 'Informática') {
                    return <li key={index}>{aluno.nome} {aluno.sobrenome} - {aluno.ano}</li>;
                    } else {
                    return '';
                    }
                })
                }

                </ul>
            </div>
            <div className="Edifica">
                <h2 className='EdificaH2'>Edificação</h2>
                <ul className='ul'>
                {
                Aluno.map((aluno, index) => {
                    if (aluno.curso === 'Edificação') {
                    return <li key={index}>{aluno.nome} {aluno.sobrenome} - {aluno.ano}</li>;
                    } else {
                    return '';
                    }
                })
                }
                </ul>
            </div>
            <div className="Log">
                <h2 className='LogH2'>Logística</h2>
                <ul className='ul'>
                {
                Aluno.map((aluno, index) => {
                    if (aluno.curso === 'Logística') {
                    return <li key={index}>{aluno.nome} {aluno.sobrenome} - {aluno.ano}</li>;
                    } else {
                    return '';
                    }
                })
                }
                </ul>
            </div>
        </div>
    )
}
