import Revenue from './Revenue';
import UserCard from './UserCard';
import Visitors from './Visitors';

// bad practice, because then one prop chages all the children will re-render
// even the one which don't depend on that data
// example: stats changes and all children will get re-rendered, even though UserCard and Visitors
// are not dependent on stats
function Dashboard({ user, stats }) {
  return (
    <>
      <UserCard user={user} />
      <Revenue stats={stats} />
      <Visitors />
    </>
  );
}

export default Dashboard;
