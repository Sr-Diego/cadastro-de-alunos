import NavBar from "./components/pages/NavBar";
import {ContextoProvider} from'./components/context/CadastroContext'
function App() {
  return (
    <ContextoProvider>
      <NavBar/>
    </ContextoProvider>
  );
}
export default App; 
