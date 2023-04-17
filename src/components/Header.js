import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    const containerStyle = {
        padding: '1rem'
    }

    return (
        <header className={styles.headerContainer}>
                <p className={styles.appTitle}>Today We Lift</p>
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