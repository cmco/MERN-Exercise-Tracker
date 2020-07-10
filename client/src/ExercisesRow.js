import React from "react";
import { Link } from "react-router-dom";

export default function ExercisesRow(props) {
  return (
    <tr>
      <td>{props.username}</td>
      <td>{props.description}</td>
      <td>{props.duration}</td>
      <td>{props.date}</td>
      <td>
        <Link to={"/edit/" + props.id}>edit</Link> |{" "}
        <a href="/#" onClick={() => props.deleteExercise(props.id)}>
          delete
        </a>
      </td>
    </tr>
  );
}
