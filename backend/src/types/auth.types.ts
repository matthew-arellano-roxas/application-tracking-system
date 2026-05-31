import { UserResponse } from './user.types';

export type AuthService = {
  localLogin: (userInput: LocalLoginRequest) => Promise<LocalLoginResponse>;
  loginWithGoogle: () => Promise<LoginWithGoogleResponse>;
  signUp: (userInput: SignUpRequest) => Promise<SignUpResponse>;
  logout: (tokens: LogOutRequest) => Promise<boolean>;
};

// DTOs
export interface LocalLoginRequest {
  email: string;
  password: string;
}

export type SignUpRequest = UserResponse & { password: string };

export type LogOutRequest = {
  accessToken: string;
  refreshToken: string;
};

export interface LocalLoginResponse {
  accessToken: string; // Short-lived (15min - 1hour)
  refreshToken: string; // Long-lived (7-30 days)
  expiresIn: number; // Seconds until access token expires
  tokenType: string; // Usually "Bearer"
}

export type SignUpResponse = {
  success: boolean;
  user: UserResponse;
};

export type LoginWithGoogleResponse = {
  token: string;
  user: UserResponse;
};
