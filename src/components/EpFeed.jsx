import Episode from './Episode';

const EpFeed = ({ episodes }) => {
  return (
    <>
      {episodes &&
        episodes.map((episode) => {
          return <Episode key={episode.name} episode={episode} />;
        })}
    </>
  );
};

export default EpFeed;
