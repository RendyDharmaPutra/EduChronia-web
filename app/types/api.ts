/**
 * Represents the response from the API.
 */
export type ApiResponse = {
  /**
   * Indicates whether the request was successful.
   */
  success: boolean;
};

/**
 * Represents a successful API response.
 *
 * @template T - The type of data returned by the API.
 * @template F - The type of additional meta data returned by the API (optional).
 */
export type ApiSuccess<T, F = unknown> = ApiResponse & {
  /**
   * Indicates that the request was successful.
   */
  success: true;

  /**
   * The data returned by the API.
   */
  data: T;

  /**
   * Additional metadata returned by the API (optional).
   */
  meta?: F;
};

/**
 * Represents a failed API response.
 */
export type ApiFailed = ApiResponse & {
  /**
   * Indicates that the request failed.
   */
  success: false;

  /**
   * The error object containing information about the failure.
   */
  error: {
    /**
     * The type of error.
     */
    type: string;

    /**
     * A human-readable message describing the error.
     */
    message: string;

    /**
     * Additional details about the error (optional).
     */
    details?: Record<string, unknown>;
  };
};
