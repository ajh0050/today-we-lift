import React from 'react';

const Header = () => {
    const containerStyle = {
        display: 'flex',
        displayDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem'
    }

    return (
        <header className="navbar bg-base-100" style={containerStyle}>
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">Today We Lift</a>
            </div>
            <div className="navbar-end">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    New Lift
                </button>
            </div>
        </header>
    );
}

export default Header;