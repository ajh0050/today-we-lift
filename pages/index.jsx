import React, { useState, useEffect } from 'react'
import workouts from '../data/workouts'

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
    const filteredArray = workouts.filter((workout) => workout.bodyPart === bodyPart);
    function getRandomIndex(arr) {
      return Math.floor(Math.random() * arr.length);
    }
    setWorkout((getRandomIndex(filteredArray)));
  };

  const resetBodyPart = () => {
    setBodyPart(null);
  }

  return (
    <>
      {!bodyPart ? <div>
        <h1>Choose Body Part</h1>
        <button className="btn btn-ghost normal-case text-xl" id="chest" onClick={handleBodyPart}>Chest</button>
        <button className="btn btn-ghost normal-case text-xl" id="back" onClick={handleBodyPart}>Back</button>
        <button className="btn btn-ghost normal-case text-xl" id="legs" onClick={handleBodyPart}>Legs</button>
        <button className="btn btn-ghost normal-case text-xl" id="arms" onClick={handleBodyPart}>Arms</button>
        <button className="btn btn-ghost normal-case text-xl" id="shoulders" onClick={handleBodyPart}>Shoulders</button>
        <button className="btn btn-ghost normal-case text-xl" id="extra" onClick={handleBodyPart}>Extra</button>
      </div> : <button onClick={resetBodyPart}>choose body part comonent</button>}

      <div>

      </div>
    </>

  )
}
