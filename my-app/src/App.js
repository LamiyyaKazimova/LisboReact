import './App.scss';
import { Header } from './components/Header/Header';
import { Section } from './components/Section/Section';
import { Demos } from './components/Demos/Demos';
import { DemoLogins } from './components/DemoLogins/DemoLogins';
import { Function } from './components/Functions/Function';
import { Features } from './components/Features/Features';
import { Support } from './components/Support/Support';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Demos/>
      <DemoLogins/>
      <Function/>
      <Features/>
      <Support/>
      <Footer/>
      <Login/>
      
    </div>
  );
}

export default App;
