import React from 'react';

const Header = () => {
    const containerStyle = {
        padding: '1rem'
    }

    return (
        <header className="navbar bg-base-100" style={containerStyle}>
                <p style={{fontSize:'4rem', textAlign:'center'}}>Today We Lift</p>
            {/* <div className="navbar-end">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    New Lift
                </button>
            </div> */}
        </header>
    );
}

export default Header;