import { CreateTokenArgs } from '@/types/utils';

// Remove next line comment after adding more functions into utils
// eslint-disable-next-line import/prefer-default-export
export const createToken = ({ email, firstName, lastName }: CreateTokenArgs): string => `${Buffer.from(email + firstName + lastName).toString('base64')}`;
