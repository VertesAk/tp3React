
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingrese el texto:
          <input type="text" name="texto" />
        </p>
        <p>
          <input type="submit" value="Mostrar" />
        </p>
      </form>
    </div>
    
  );
}

function presion(e) {
  e.preventDefault();
  const texto=(e.target.texto.value);
  let cont=0;
  let vocales= 'aeiouAEIOU';
  for(let i = 0; i < texto.length; i++) {
    if(vocales.indexOf(texto[i]) !== -1) {
      cont ++;
    }   
  }
  alert("Hay un total de "+cont);
  return cont;
}

export default App;