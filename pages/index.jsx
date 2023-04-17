import React, { useState, useEffect } from 'react'
import workouts from '../data/workouts'
import Workout from '../src/components/Workout'
import ChooseBodyPart from '../src/components/ChooseBodyPart'

export default function Home() {
  const [bodyPart, setBodyPart] = useState(null)
  const [workout, setWorkout] = useState({})

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
    <div className="m-8 container" >
      {!bodyPart ? <ChooseBodyPart handleBodyPart={handleBodyPart} /> : <button onClick={resetBodyPart}>choose body part comonent</button>}

      {workout.title && <Workout workout={workout} />}
    </div>

  )
}
