import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hompage from './page/Hompage';
const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Hompage />} />
        </Routes>
    );
};

export default App;
