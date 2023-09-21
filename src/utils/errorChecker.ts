export const errorClassChecker = (className?: string) => {
  return (error: boolean) => `${className} ${error ? 'input-error' : ''}`;
};
