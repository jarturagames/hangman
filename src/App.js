//import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>jartura games</h1>
      </header>
      <main>
        <section className="section_solution">
          <div>
            imagen
            <img></img>
          </div>

          <div>
            <p>solucion</p>
          </div>
        </section>
        <section className="section_form_game">
          <form>
            <input placeholder="chosen word"></input>

            <button>submit</button>

            <input disabled="disabled" placeholder="number of errors"></input>
          </form>
        </section>
      </main>

      <footer>
      <span>&copy; jartura games</span>
      <span>logo
        <img alt="logo"></img>
        </span>
      </footer>
    </div>
  );
}

export default App;
/*
    <header>
        <h1>jartura games</h1>
      </header>

      <main>

        <section className="section_solution">
          <div>
            <img>imagen</img>
          </div>
          <div></div>
        </section>

        <section className="section_form_game">
          <form>
            <input>letra elegida</input>
            <button></button>
          </form>
        </section>

      </main>
*/
