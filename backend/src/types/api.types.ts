export type APIResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type APIError = {
  success: boolean;
  message?: string;
  error: string;
};
