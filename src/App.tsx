import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import DataDisplay from './components/DataDisplay';
import { DataDisplayProps } from "./components/types";
import AddAlbumForm from "./components/AddAlbumForm";

export default function App() {
  const [data, setData] = useState<DataDisplayProps[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums/")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="App">
      <DataDisplay data={data} />
      <AddAlbumForm/>
    </div>
  );
}
