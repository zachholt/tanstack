import React from "react"; 
import { DataDisplayProps } from "./types";

export default function DataDisplay( {data}: {data:DataDisplayProps[]}) {
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul>
  );
}
