import '../styles/Episode.css';

const Episode = ({ episode }) => {
  return (
    <main className="Episode_wrapper">
      <p>
        <span className="grey">Name: </span>
        {episode.name}
      </p>
      <p>
        <span className="grey">Air Date: </span>
        {episode.air_date}
      </p>
      <p>
        <span className="grey">Episode: </span>
        {episode.episode}
      </p>
    </main>
  );
};

export default Episode;
