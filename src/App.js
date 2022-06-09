import './css/App.scss';
import {Home} from './pages/Home'
import {Team} from './pages/about-us/Team'
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
import {OurApp} from "./pages/OurApp";
import {ContactUs} from "./pages/Contact";
import {Spinner} from "flowbite-react";

function Fallback() {
    return (
        <div className="text-center">
            <Spinner aria-label="Waiting"/>
        </div>
)
}

function App() {
    return (
            <div className="App">
                <Navigation/>
                <Suspense fallback={<Fallback/>}>
                    <Routes>
                        <Route element={<Home/>} path='/'/>
                        <Route element={<Team/>} path='/about-us'/>
                        <Route element={<Why/>} path='/why'/>
                        <Route element={<OurApp/>} path='/app'/>
                        <Route element={<Blog/>} path='/blog'/>
                        <Route element={<ContactUs/>} path='/contact'/>
                    </Routes>
                </Suspense>
                <Footer/>
            </div>

    );
}

export default App;
