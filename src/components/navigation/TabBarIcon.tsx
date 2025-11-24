import { Octicons } from '@react-native-vector-icons/octicons';

export const TabBarIcon = (
  selectedIconName: any,
  unSelectedIconName: any,
  focused: boolean,
  color: string,
  size: number,
) =>
  focused ? (
    <Octicons name={selectedIconName} color={color} size={size} />
  ) : (
    <Octicons name={unSelectedIconName} color={color} size={size} />
  );
