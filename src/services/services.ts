import { GetUserArgs } from '@/types/services';

export const getUser = async ({ userId }: GetUserArgs): Promise<Response> => {
  const url = 'https://x-check-app-server-team25.herokuapp.com/user';

  const rawResponse = await fetch(`${url}?id=${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  // eslint-disable-next-line no-console
  console.log(await rawResponse.json());
  return rawResponse;
};

export const test = (): void => {};
