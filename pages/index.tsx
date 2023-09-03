import type { NextPage } from 'next';
import ClockWidget from '../components/Clock';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Notion Clock Widget</h1>
      <ClockWidget />
    </div>
  );
};

export default Home;
