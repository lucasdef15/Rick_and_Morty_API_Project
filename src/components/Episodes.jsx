import EpFeed from './EpFeed';
import Missing from './Missing';

const Episodes = ({ episodes }) => {
  return (
    <main className="Episode_container">
      {episodes.length > 0 ? <EpFeed episodes={episodes} /> : <Missing />}
    </main>
  );
};

export default Episodes;
