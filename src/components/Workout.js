// import React from 'react';

// const Workout = ({workout}) => {
//     console.log('workout at render of workout comoponent',workout)
//     const exercises = workout.exercises?.map((exercise) => {
//         if (typeof exercise.reps == 'string' && !exercise.sets) {
//             return (
//                 <div>
//                     <h2>{exercise.name}</h2>
//                     <h3>{exercise.notes}</h3>
//                     <h4>{exercise.reps}</h4>
//                 </div>
//             );
//         }
//         if (typeof exercise.reps == 'string' && exercise.sets) {
//             return (
//                 <div>
//                     <h2>{exercise.name}</h2>
//                     <h3>{exercise.notes}</h3>
//                     {Array.from({ length: exercise.sets }, () => (
//                         <h4>{exercise.reps}</h4>
//                     ))}
//                 </div>
//             );
//         }
//         if (exercise.reps?.length && !exercise.sets) {
//             return (
//                 <div>
//                     <h2>{exercise.name}</h2>
//                     <h3>{exercise.notes}</h3>
//                     <h4>{exercise.reps.join(', ')}</h4>
//                 </div>
//             );
//         }
//         if (exercise.reps?.length && exercise.sets) {
//             return (
//                 <div>
//                     <h2>{exercise.name}</h2>
//                     <h3>{exercise.notes}</h3>
//                     {Array.from({ length: exercise.sets }, () => (
//                         <h4>{exercise.reps.join(', ')}</h4>
//                     ))}
//                 </div>
//             );
//         }
//     })
//     return (
//         <div>
//             <h1>{workout.title}</h1>
//             {workout.workout_notes !== "" && <h2> workout.workout_notes </h2>}
//             {exercises}
//         </div>
//     );
// }

// export default Workout;

// import React from 'react';

// const Workout = ({ workout }) => {
//   console.log('workout at render of workout comoponent', workout);
//   const exercises = workout.exercises?.map((exercise, index) => {
//     return (
//       <div key={index} className="border-b border-gray-200 mb-4">
//         <h2 className="text-2xl font-semibold mb-2">{exercise.name}</h2>
//         {exercise.notes && (
//           <h3 className="text-lg text-gray-500 italic mb-2">{exercise.notes}</h3>
//         )}
//         <h4 className="text-lg font-bold">
//           {typeof exercise.reps === 'string' ? exercise.reps : exercise.reps.join(', ')}
//         </h4>
//         {exercise.sets && (
//           <h4 className="text-lg text-gray-600">Sets: {exercise.sets}</h4>
//         )}
//       </div>
//     );
//   });

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-6">{workout.title}</h1>
//       {workout.workout_notes !== '' && (
//         <h2 className="text-2xl font-semibold mb-4">{workout.workout_notes}</h2>
//       )}
//       {exercises}
//     </div>
//   );
// };

// export default Workout;

import React from 'react';
import 'daisyui/dist/full.css';

const Workout = ({ workout }) => {
  console.log('workout at render of workout comoponent', workout);
  const exercises = workout.exercises?.map((exercise, index) => {
    return (
      <div key={index} className="card shadow-lg w-full mb-6">
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold mb-2">{exercise.name}</h2>
          {exercise.notes && (
            <h3 className="text-lg text-gray-500 italic mb-2">{exercise.notes}</h3>
          )}
          <h4 className="text-lg font-bold">
            {typeof exercise.reps === 'string' ? exercise.reps : exercise.reps.join(', ')}
          </h4>
          {exercise.sets && (
            <h4 className="text-lg text-gray-600">Sets: {exercise.sets}</h4>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">{workout.title}</h1>
      {workout.workout_notes !== '' && (
        <h2 className="text-2xl font-semibold mb-4">{workout.workout_notes}</h2>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {exercises}
      </div>
    </div>
  );
};

export default Workout;
