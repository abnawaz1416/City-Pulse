import { scale, verticalScale } from 'react-native-size-matters';

export const Dimension = {
  sizeX: (v: number) => scale(v),
  sizeY: (v: number) => verticalScale(v),
  gapX: (v: number) => scale(v),
  gapY: (v: number) => verticalScale(v),
  radius: (v: number) => verticalScale(v),
};
