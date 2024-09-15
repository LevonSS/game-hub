import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <div>
      {genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </div>
  );
};

export default GenreList;
