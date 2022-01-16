//import logo from "./logo.svg";
import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import GameIllustration from "./GameIllustration";
import GameInteractive from "./GameInteractive";

function App() {
  return (
    <>
      <Header />
      <GameIllustration />
      <GameInteractive />
      <Footer />
    </>
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
