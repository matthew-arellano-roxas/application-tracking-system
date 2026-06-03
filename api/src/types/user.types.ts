export interface UserService {
  createUser: (userInput: CreateUserRequest) => Promise<UserResponse>;
  findUser: (id: string) => Promise<UserResponse>;
  findAllUsers: () => Promise<UserResponse[]>;
  updateUser: (
    id: string,
    userInput: UpdateUserRequest,
  ) => Promise<UserResponse>;
  deleteUser: (id: string) => Promise<UserResponse>;
  findUserByEmail: (email: string) => Promise<UserResponse>;
  findUserCredentials: (
    email: string,
    password: string,
  ) => Promise<UserResponse>;
}

export interface UserResponse {
  id?: string;
  email: string;
  name: string;
  role: string;
}

export interface CreateUserRequest {
  email: string;
  name: string;
  role: string;
  password: string;
}

export interface UpdateUserRequest {
  name?: string;
  role?: string;
  password?: string;
}

export interface GetUserRequestQuery {
  id?: string;
  email?: string;
  name?: string;
  role?: string;
}
