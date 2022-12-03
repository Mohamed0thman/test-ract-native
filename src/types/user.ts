import {ImageSourcePropType} from 'react-native';

export type User = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  image?: string;
};
