import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import ExercisesRow from "./ExercisesRow.js";

export default function ExercisesList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("/exercises").then((res) => setExercises(res.data));
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete("/exercises/" + id)
      .then((res) => console.log(res.data))
      .then(setExercises(exercises.filter((exer) => exer._id !== id)));
  };

  return (
    <div>
      <h1>Exercise List</h1>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>User</th>
            <th>Exercise</th>
            <th>Duration (Minutes)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exer) => (
            <ExercisesRow
              username={exer.username}
              description={exer.description}
              duration={exer.duration}
              date={exer.date}
              id={exer._id}
              key={exer._id}
              deleteExercise={deleteExercise}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
