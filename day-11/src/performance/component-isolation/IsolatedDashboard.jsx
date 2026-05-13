import Revenue from './Revenue';
import UserCard from './UserCard';
import Visitors from './Visitors';
import { memo } from 'react';

// good practice - use memoization for components so the rendering will done only on certain changes
// and information could be cached
// Isolate components with memo and it creates certain amount of render boundaries
const MUserCard = memo(UserCard);
const MRevenue = memo(Revenue);

const IsolatedDashboard = ({ user, stats }) => {
  return (
    <>
      <MUserCard user={user} />
      <MRevenue stats={stats} />
      <Visitors />
    </>
  );
};

export default IsolatedDashboard;
