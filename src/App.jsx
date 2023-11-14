
import './App.css'
import Compteur from './composants/Compteur';

function App() {
 const age = 10;
 const nom = 'Rafik'
  return (
    <div className='App'>
        <Compteur />
        {
          age> 20 && < Compteur age={age} />
        }
        <Compteur />
        <Compteur />
        <Compteur />
      </div>  
  );
}
export default App
