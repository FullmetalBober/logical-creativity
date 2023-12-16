import { TNoteSchema } from './schemas/note';

export const endIconInputClasses = 'text-2xl text-default-400 pointer-events-none flex-shrink-0';

export const pageLinks = {
  home: '/',
  'new-test': '/new-test',
  login: '/auth/login',
  register: '/auth/register',
};

export const colors = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const;

export const createNoteObj: TNoteSchema = {
  id: '-1',
  title: 'Create a new note',
  body: '',
  color: 'primary',
  isFavorite: true,
};
