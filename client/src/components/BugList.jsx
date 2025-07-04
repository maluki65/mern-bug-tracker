import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function BugList({ reload }) {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/bugs').then((res) => 
      setBugs(res.data))
  }, [reload]);

  return (
    <ul>
      {bugs.map((bug) => (
        <li 
          key={bug._id}
         >
          {bug.title} - {bug.status}
        </li>
      ))}
    </ul>
  );
}