import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Character.css';

const Character = ({ character, currentPage }) => {
  return (
    <main className="character">
      <Link to={`/char/${character.id}?page=${currentPage}`}>
        <div className="character-wrapper">
          <span className="char_Image">
            <img src={character.image} alt={character.name} />
          </span>
          <span className="char_info">
            <p>{character.name}</p>
          </span>
        </div>
      </Link>
    </main>
  );
};

export default Character;
