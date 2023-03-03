import { useParams } from 'react-router-dom';

const CharInfo = ({ characters }) => {
  const { id } = useParams();
  let Character;
  characters.map((character) => {
    if (character.id.toString() === id) {
      Character = character;
      return Character;
    }
  });
  const handleStatus = () => {
    if (Character && Character.status.toLowerCase() === 'unknown') {
      return { backgroundColor: 'grey' };
    } else if (Character.status.toLowerCase() === 'alive') {
      return { backgroundColor: 'rgb(85, 204, 68)' };
    } else {
      return { backgroundColor: 'red' };
    }
  };
  return (
    <>
      {Character && (
        <div className="character_page_wrapper">
          <span className="char_page_image">
            <img src={Character.image} alt={Character.name} />
          </span>
          <span className="char_page_info">
            <p className="name">{Character.name}</p>
            <span className="status_wrapper">
              <span className="status_circle" style={handleStatus()}></span>
              <span className="status">
                {Character.status} - {Character.species}
              </span>
            </span>
            <div className="grey">Gender: </div>
            <div>{Character.gender}</div>
            <div className="grey">Origin:</div>
            <div>{Character.origin.name}</div>
            <div className="grey">Last Know Location:</div>
            <div>{Character.location.name}</div>
          </span>
        </div>
      )}
    </>
  );
};

export default CharInfo;
