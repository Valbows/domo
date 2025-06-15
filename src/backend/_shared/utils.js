// Shared utility functions for backend

export const validateApiKey = (apiKey) => {
  return apiKey && apiKey.length > 0;
};

export const handleError = (error, res) => {
  console.error('API Error:', error);
  return res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
};

export const formatResponse = (data, message = 'Success') => {
  return {
    success: true,
    message,
    data
  };
}; 