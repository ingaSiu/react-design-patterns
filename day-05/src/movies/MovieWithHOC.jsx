import MovieAnalytics from './MovieAnalytics';
import MovieList from './MovieList';
import { withDataFetching } from './hoc/withDataFetching';

// Wrap both components with the same HOC
const MovieListWithData = withDataFetching(MovieList);
const MovieAnalyticsWithData = withDataFetching(MovieAnalytics);

export default function MovieWithHOC() {
  return (
    <div className="max-w-lg mx-auto mt-10 space-y-6">
      <MovieListWithData />
      <MovieAnalyticsWithData />
    </div>
  );
}
