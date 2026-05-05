import { memo } from 'react'; // memo is HOC from React

// encapsulate whole React component func iside memo func
// this HOC takes another function as an argument
// passing ProfileCard function gets us memorized function which we export
const MemoizedCard = memo(function ProfileCard({ name }) {
  console.log('Rendered <ProfileCard />');
  return <h3>{name}</h3>;
});

export default MemoizedCard;
