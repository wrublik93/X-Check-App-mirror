import { User } from '@/types/entities';
import { GetUserArgs } from '@/types/services';

export const getUser = async ({ userId }: GetUserArgs): Promise<User> => {
  const url = 'https://x-check-app-server-team25.herokuapp.com/user';

  const rawResponse = await fetch(`${url}?id=${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return rawResponse.json() as Promise<User>;
};

export const test = (): void => {};
