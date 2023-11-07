import './Registro.css';
import ListaInfo from '../Listas/ListaInfo';
import ListaEdif from '../Listas/ListaEdif';
import ListaLog from '../Listas/ListaLog';
export default function Registro() {
    
    return(
        <div className="Principal">
            <ListaInfo/>
            <ListaEdif/>
            <ListaLog/>
        </div>
    );
}
