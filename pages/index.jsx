import React, { useState, useEffect } from 'react'
import workouts from '../data/workouts'
import Workout from '../src/components/Workout'
import ChooseBodyPart from '../src/components/ChooseBodyPart'
import styles from '../src/components/Main.module.css'
import Head from 'next/head'


export default function Home() {
  const [bodyPart, setBodyPart] = useState(null)
  const [workout, setWorkout] = useState({})

  // const styles = {
  //   fontSize: "1.5rem",
  //   fontWeight: "bold",
  //   textTransform: "none",
  //   backgroundColor: "#f4f4f4",
  //   border: "1px solid #333",
  //   color:"#333",
  //   padding: "10px 20px",
  //   cursor: "pointer",
  //   transition: "background-color 0.3s, color 0.3s"
  // }

  useEffect(() => {
    if (bodyPart) {
      getRandomWorkout();
    }
  }, [bodyPart])


  const handleBodyPart = (e) => {
    setBodyPart(e.target.id);
  }

  const getRandomWorkout = () => {
    const filteredArray = workouts.filter((workout) => workout.body_part === bodyPart);
    function getRandomIndex(arr) {
      return Math.floor(Math.random() * arr.length);
    }
    setWorkout(filteredArray[(getRandomIndex(filteredArray))]);
  };

  const resetBodyPart = () => {
    setBodyPart(null);
  }

  return (
    <div className={styles.mainContainer}>
       <Head>
       <meta property="og:title" content="The best free workouts you can find" />
       <meta property="og:image" content="https://drive.google.com/file/d/1mzEtwc0zrmmf7IKLkHgapw4wvEMnNcDm/view?usp=sharing" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {!bodyPart ? <ChooseBodyPart handleBodyPart={handleBodyPart} /> : <button className={styles.button} onClick={resetBodyPart}>Choose body part</button>}

      {workout.title && <Workout workout={workout} />}
    </div>

  )
}
