import {
  View,
  TextInput,
  TextInputProps,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

type Props = TextInputProps & {
  leftIcon?: ImageSourcePropType | undefined;
  rightIcon?: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  containerStyle?: ViewStyle;
};

const CustomInput = (props: Props) => {
  const {leftIcon, rightIcon, onPress, containerStyle} = props;
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        paddingHorizontal: SIZES.padding * 2.5,
        flexDirection: 'row',
        height: 54,
        ...containerStyle,
      }}>
      {leftIcon && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 20,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'flex-start',

            zIndex: 1,
          }}>
          <Image source={leftIcon} />
        </View>
      )}

      <TextInput
        style={{
          ...FONTS.body4,
          color: COLORS.dark,
          height: 54,
          width: '100%',
          zIndex: 2,
        }}
        {...props}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 20,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'flex-end',
          zIndex: 1,
        }}>
        {rightIcon}
      </View>
    </View>
  );
};

export default CustomInput;
