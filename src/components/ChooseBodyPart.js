import React from 'react';
import styles from './ChooseBodyPart.module.css';

const ChooseBodyPart = (props) => {
    return (
        <div className={styles.ChooseBodyPartContainer}>
            <p className={styles.label}>Choose Body Part</p>
            <div className={styles.buttonContainer}>
                <button className={styles.button} id="chest" onClick={props.handleBodyPart}>Chest</button>
                <button className={styles.button} id="back" onClick={props.handleBodyPart}>Back</button>
                <button className={styles.button} id="legs" onClick={props.handleBodyPart}>Legs</button>
                <button className={styles.button} id="arms" onClick={props.handleBodyPart}>Arms</button>
                <button className={styles.button} id="shoulders" onClick={props.handleBodyPart}>Shoulders</button>
                <button className={styles.button} id="extra" onClick={props.handleBodyPart}>Extra</button>
            </div>
        </div>
    );
}

export default ChooseBodyPart;
