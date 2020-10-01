import { CreateTokenArgs, CreateHashKeysArrayArgs } from '@/types/utils';

// Remove next line comment after adding more functions into utils
// eslint-disable-next-line import/prefer-default-export
export const createToken = ({ email, firstName, lastName }: CreateTokenArgs): string => `${Buffer.from(email + firstName + lastName).toString('base64')}`;
export const createHashKeysArray = ({ length }: CreateHashKeysArrayArgs): string[] => {
  const hashKeysArray: string[] = [];
  let hashKey = 0;

  for (let i = 0; i < length; i += 1) {
    hashKey = new Date().getMilliseconds();
    hashKeysArray.push(`${hashKey}-${i}`);
  }

  return hashKeysArray;
};
