import React from 'react';
import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
            <div className='holder'>
                <img src='images/logo.png' width='125' alt='LaPlayaFestival' />
                <div>
                    <h1>LA PLAYA</h1>
                    <h5>SUNSET FESTIVAL</h5>
                </div>
            </div>
        </header>
    );
}

export default Header;