export type User = {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  joinedAt: string;
  location: string;
  website: string;
  followers: number;
  following: number;
};

// Use "Partial" or pick specific fields for the form
export type UserProfileFormData = Pick<User, 'name' | 'email' | 'bio'>;

export type UpdateUserResponse = {
  success: boolean;
  error?: string;
};
