import ErrorMessage from '../common/ErrorMessage';
import LoadingSpinner from '../common/LoadingSpinner';
import PostList from '../post/PostList';
import ProfileHeader from './ProfileHeader';
import { useState } from 'react';

const UserProfilePresenter = ({ user, posts, loading, error, onRetry, onUpdateUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear form error when user starts typing
    if (formError) setFormError(null);
  };

  const handleSaveProfile = async () => {
    const result = await onUpdateUser(formData);
    if (result.success) {
      setIsEditing(false);
      setFormError(null);
    } else {
      setFormError(result.error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setFormError(null);
    // Reset form data
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        bio: user.bio,
      });
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading user profile..." />;
  }

  if (error) {
    return <ErrorMessage title="Oops! Something went wrong" message={error} onRetry={onRetry} />;
  }
  return (
    <div className="user-profile">
      <ProfileHeader
        user={user}
        isEditing={isEditing}
        formData={formData}
        formError={formError}
        onStartEdit={() => setIsEditing(true)}
        onSaveProfile={handleSaveProfile}
        onInputChange={handleInputChange}
        onCancelEdit={handleCancelEdit}
      />
      <PostList posts={posts} />
    </div>
  );
};

export default UserProfilePresenter;
