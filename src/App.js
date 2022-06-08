import './App.css';
import {Home} from './pages/Home'
import {AboutUs} from './pages/AboutUs.js'
import {Footer} from "./components/Footer";
import {Navigation} from "./components/Navigation";
import {Blog} from "./pages/Blog"
import {Why} from "./pages/Why"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import React, {Suspense} from 'react'


function App() {
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <Suspense fallback={<div>Waiting to load</div>}>
                    <Routes>
                        <Route element={<Home />} path='/' />
                        <Route element={<AboutUs />} path='/about-us' />
                        <Route element={<Why />} path='/why' />
                        <Route element={<Blog />} path='/blog' />
                    </Routes>
                </Suspense>
                <Footer/>
            </div>
        </Router>

    );
}

export default App;
