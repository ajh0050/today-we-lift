import { createContext, useState } from "react";

export const Workout_data = createContext(null);


export const Workout_DataProvider = ({ children }) => {
    const [workout, setWorkout] = useState({});
    const getRandomWorkout = () => {
        function getRandomIndex(arr){
            return Math.floor(Math.random() * arr.length);
        }
        setWorkout();
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};