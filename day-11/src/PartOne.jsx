import ChildDemo from './performance/memoization/useCallback/ChildDemo';
import MemoizedProfileTracker from './performance/memoization/memo/MemoizedProfileTracker';
import RenderTrackerDemo from './performance/rerenders/RenderTrackerDemo';
import ScrollTracker from './throttling/ScrollTracker';
import SearchBox from './debouncing/SearchBox';
import UsersSortingDemo from './performance/memoization/use-memo/UsersSortingDemo';

const PartOne = () => {
  return (
    <>
      <ScrollTracker />
      <RenderTrackerDemo />
      <MemoizedProfileTracker />
      <ChildDemo />
      <SearchBox />
      <UsersSortingDemo />
    </>
  );
};

export default PartOne;
