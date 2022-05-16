import React from 'react'
import {Route, Routes} from 'react-router-dom';
import BlogPage from "./pages/BlogPage";
import Page404 from "./pages/Page404";
import './assets/scss/style.scss'

function App() {
    return (
        <>
            <h1>Redux Saga App</h1>
            <Routes>
                    <Route path='/' element={<BlogPage />} />
                    <Route path='*' element={<Page404 />} />
            </Routes>
        </>
    );
}

export default App;
