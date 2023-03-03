import CharInfo from './CharInfo';
import '../styles/CharPage.css';

const CharPage = ({ characters }) => {
  return (
    <main className="character_page">
      <CharInfo characters={characters} />
    </main>
  );
};
export default CharPage;
