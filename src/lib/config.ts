/**
 * Get the API URL based on environment variables and fallbacks
 * @returns {string} The API endpoint URL
 */
export const getApiUrl = (): string => {
  // Custom API URL (highest priority)
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  // Production fallback (Vercel serverless)
  if (import.meta.env.PROD) {
    return "/api/send-email";
  }

  // Development fallback (Express server)
  return "http://localhost:3001/api/send-email";
};

/**
 * Environment configuration
 */
export const config = {
  apiUrl: getApiUrl(),
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
} as const;
