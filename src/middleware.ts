import { withAuth } from 'next-auth/middleware';
import { pageLinks } from '@/constants';

export default withAuth({
  secret: process.env.SECRET,
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    error: '/auth/error',
  },
});

export const config = {
  matcher: [pageLinks.home, pageLinks['new-test']],
};
