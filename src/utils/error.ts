export const getErrorMessage = (error: unknown) => {
  let message = 'Something went wrong';

  if (error instanceof Error) message = error.message;
  else if (typeof error === 'string') message = error;
  else if (error && typeof error === 'object' && 'message' in error) message = String(error.message);

  return message;
};
