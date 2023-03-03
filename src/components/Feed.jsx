import Character from './Character';

const Feed = ({ characters, currentPage }) => (
  <>
    {characters.map((character) => (
      <Character
        key={character.id}
        character={character}
        currentPage={currentPage}
      />
    ))}
  </>
);

export default Feed;
