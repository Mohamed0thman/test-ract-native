import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  ViewStyle,
  GestureResponderEvent,
  ImageStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

type Props = {
  containerStyle?: ViewStyle;
  labelStyle?: ViewStyle;
  iconStyle?: ImageStyle;
  icon?: ImageSourcePropType | undefined;
  label?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const CustomButton = ({
  containerStyle,
  label,
  onPress,
  icon,
  labelStyle,
  iconStyle,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        ...containerStyle,
      }}
      onPress={onPress}>
      {label && (
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.white,
            marginRight: 7,
            ...labelStyle,
          }}>
          {label}
        </Text>
      )}

      {icon && (
        <Image
          source={icon}
          style={{
            ...iconStyle,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
