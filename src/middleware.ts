// Without a defined matcher, this one line applies next-auth to the entire app.
export { default } from 'next-auth/middleware';

// Applies next-auth only to matching routes - can be regex
// More https://next-auth.js.org/configuration/nextjs#middleware
// export const config = { matcher: ['/dashboard'] };
