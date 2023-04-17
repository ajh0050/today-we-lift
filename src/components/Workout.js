import React from 'react';
import styles from './Workout.module.css';

const Workout = ({ workout }) => {
    const exercises = workout.exercises?.map((exercise) => {
        const commonProps = {
            key: index,
            className: styles.card,
        };
        if (typeof exercise.reps == 'string' && !exercise.sets) {
            return (
                <div {...commonProps}>
                    <p className={styles.exerciseTitle}>{exercise.name}</p>
                    <p className={styles.exerciseNotes}>{exercise.notes}</p>
                    <p className={styles.reps}>{exercise.reps}</p>
                </div>
            );
        }
        if (typeof exercise.reps == 'string' && exercise.sets) {
            return (
                <div {...commonProps}>
                    <p className={styles.exerciseTitle}>{exercise.name}</p>
                    <p className={styles.exerciseNotes}>{exercise.notes}</p>
                    {Array.from({ length: exercise.sets }, () => (
                        <p key={i} className={styles.reps}>{exercise.reps}</p>
                    ))}
                </div>
            );
        }
        if (exercise.reps?.length && !exercise.sets) {
            return (
                <div {...commonProps}>
                    <p className={styles.exerciseTitle}>{exercise.name}</p>
                    <p className={styles.exerciseNotes}>{exercise.notes}</p>
                    <p className={styles.reps}>{exercise.reps.join(', ')}</p>
                </div>
            );
        }
        if (exercise.reps?.length && exercise.sets) {
            return (
                <div {...commonProps}>
                    <p className={styles.exerciseTitle}>{exercise.name}</p>
                    <p className={styles.exerciseNotes}>{exercise.notes}</p>
                    {Array.from({ length: exercise.sets }, () => (
                        <p key={i} className={styles.reps}>{exercise.reps.join(', ')}</p>
                    ))}
                </div>
            );
        }
    })
    return (
        <div className={styles.componentContainer}>
            <h2 className={styles.title}>{workout.title}</h2>
            {workout.workout_notes !== "" && <p className={styles.workoutNotes}> {workout.workout_notes} </p>}

            {exercises}
        </div>
    );
}

export default Workout;

