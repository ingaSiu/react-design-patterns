import type { User, UserProfileFormData } from '../../../types/profile';

type HeaderProps = {
  user: User;
  isEditing: boolean;
  formData: UserProfileFormData;
  formError: string | null;
  onStartEdit: () => void;
  onSaveProfile: () => void;
  onCancelEdit: () => void;
  onInputChange: (field: keyof UserProfileFormData, value: string) => void;
};

const ProfileHeader = ({
  user,
  isEditing,
  formData,
  formError,
  onStartEdit,
  onSaveProfile,
  onCancelEdit,
  onInputChange,
}: HeaderProps) => {
  return (
    <div className="profile-header">
      <img src={user.avatar || '/default-avatar.png'} alt={`${user.name}'s avatar`} className="avatar" />
      {!isEditing ? (
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p className="email">{user.email}</p>
          <p className="bio">{user.bio}</p>
          <button onClick={onStartEdit} className="edit-btn">
            Edit Profile
          </button>
        </div>
      ) : (
        <div className="profile-form">
          {formError && <div className="form-error">{formError}</div>}
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            placeholder="Email"
          />
          <textarea value={formData.bio} onChange={(e) => onInputChange('bio', e.target.value)} placeholder="Bio" />
          <div className="form-actions">
            <button onClick={onCancelEdit}>Cancel</button>
            <button onClick={onSaveProfile}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
