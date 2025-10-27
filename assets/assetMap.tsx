import { ImageSourcePropType } from 'react-native';

import lb from './lb.jpeg';
import venice from './venice.jpg';
import sumba from './sumba.jpeg';

import PlusJakartaRegular from './fonts/PlusJakartaSans-Regular.ttf';
import PlusJakartaSemiBold from './fonts/PlusJakartaSans-SemiBold.ttf';
import PlusJakartaBold from './fonts/PlusJakartaSans-Bold.ttf';
import PlusJakartaExtraBold from './fonts/PlusJakartaSans-ExtraBold.ttf';

export const ASSET_MAP: { [key: string]: ImageSourcePropType } = {
  lb,
  venice,
  sumba,
};

export const FONT_MAP: { [key: string]: any } = {
  'PlusJakartaSans-Regular': PlusJakartaRegular,
  'PlusJakartaSans-SemiBold': PlusJakartaSemiBold,
  'PlusJakartaSans-Bold': PlusJakartaBold,
  'PlusJakartaSans-ExtraBold': PlusJakartaExtraBold,
};
