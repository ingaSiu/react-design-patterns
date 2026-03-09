import type { UpdateUserResponse, User, UserProfileFormData } from '../../../types/profile.js';

import ErrorMessage from '../common/ErrorMessage.js';
import LoadingSpinner from '../common/LoadingSpinner.js';
import type { Post } from '../../../types/posts.js';
import PostList from '../post/PostList.js';
import ProfileHeader from './ProfileHeader.js';
import { useState } from 'react';

type UserProfilePresenterProps = {
  user: User | null;
  posts: Post[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  onUpdateUser: (data: UserProfileFormData) => Promise<UpdateUserResponse>;
};

const UserProfilePresenter = ({ user, posts, loading, error, onRetry, onUpdateUser }: UserProfilePresenterProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProfileFormData>({
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
  });
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (field: keyof UserProfileFormData, value: string) => {
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
      setFormError(result.error || 'Unknown error');
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

  if (error || !user) {
    return <ErrorMessage title="Oops! Something went wrong" message={error || 'User not found'} onRetry={onRetry} />;
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
