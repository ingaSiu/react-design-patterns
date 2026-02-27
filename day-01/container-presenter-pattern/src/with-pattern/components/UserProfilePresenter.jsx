import ErrorMessage from './common/ErrorMessage';
import LoadingSpinner from './common/LoadingSpinner';

const UserProfilePresenter = ({ user, posts, loading, error, onRetry }) => {
  if (loading) {
    return <LoadingSpinner message="Loading user profile..." />;
  }

  if (error) {
    return <ErrorMessage title="Oops! Something went wrong" message={error} onRetry={onRetry} />;
  }
  return <div>UserProfilePresenter</div>;
};

export default UserProfilePresenter;
