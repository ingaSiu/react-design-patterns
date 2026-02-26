import LoadingSpinner from './common/LoadingSpinner';

const UserProfilePresenter = ({ user, posts, loading, error }) => {
  if (loading) {
    return <LoadingSpinner message="Loading user profile..." />;
  }

  return <div>UserProfilePresenter</div>;
};

export default UserProfilePresenter;
