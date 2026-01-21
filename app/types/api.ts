export type ApiResponse = {
  success: boolean;
};

export type ApiSuccess<T, F = unknown> = ApiResponse & {
  success: true;
  data: T;
  meta?: F;
};

export type ApiFailed = ApiResponse & {
  success: false;
  error: {
    type: string;
    message: string;
    details?: Record<string, unknown>;
  };
};
