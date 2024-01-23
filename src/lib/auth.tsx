// utils/auth.js

import { getSession } from 'next-auth/react';

export const getClientSession = async () => {
  return await getSession();
};
