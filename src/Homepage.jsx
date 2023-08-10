import React from 'react'
import Header from './components/Header';
import SearchContainer from './components/SearchContainer';

const Homepage = () => {
    return (
        <div className="App">
            <div className="main">
                <Header />
                <SearchContainer/>
            </div>
        </div>
    )
}

export default Homepage