import "./App.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Usuario from "./components/Usuario";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Usuario nome="Douglas"></Usuario>
      <Projects></Projects>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}

export default App;
