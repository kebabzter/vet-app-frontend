import { error } from '@sveltejs/kit';

export const match = ( param ) => {
  return param === 'cats' || param === 'dogs';
};
