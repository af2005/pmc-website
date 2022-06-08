import logo from './img/logo.svg';
import './App.css';
import {Team} from './pages/Team.js'
import {Footer} from "./components/Footer";
import {Navigation} from "./components/Navigation";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            </header>
            <Team/>
            <Footer/>
        </div>
    );
}

export default App;
