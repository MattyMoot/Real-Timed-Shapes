import React from 'react';
import './App.css';
import Shapes from '../src/components/Shapes';

function App() {
    let renderData = []
    for (let i = 0; i < 60; i++) {
        renderData.push(<Shapes />)
    }
    return (
        <div>
            {renderData}
        </div>
    );
}

export default App;