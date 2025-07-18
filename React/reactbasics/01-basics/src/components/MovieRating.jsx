import React, { useState } from "react";

export const MovieRating = () => {
  const [movie, setMovie] = useState({
    title: "Ramaiya Vastavaiyaa",
    rating: 9,
  });

  const [picture, setPicture] = useState([
    { id: 1, title: "Interstellar", rating: 10 },
    { id: 2, title: "Shutter Island", rating: 8 }
  ]
  );

  const updateRating = () => {
    // const copyMovie = {
    //     ...movie,rating:  Math.floor(Math.random()*100)
    // }
    setMovie({ ...movie, rating: Math.floor(Math.random() * 1000) });
  };

  const updatePicture = () => {
    setPicture(picture.map(m => m.id === 1 ? {...picture ,title:"Inception" , rating:9} : m ))
  }
  
  return (
    <div>
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.rating} </p>
        <button onClick={updateRating}>Change rating</button>
      </div>

      <div>
        {picture.map( m => (
            <ul key={Math.random()}>
                    <li>Title = {m.title} </li>
                    <li>Rating = {m.rating} </li>
            </ul>
        ))}

        <button onClick={updatePicture} >Update title</button>
      </div>
    </div>
  );
};
