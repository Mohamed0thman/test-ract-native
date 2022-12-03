import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

type Tap = {
  icon?: ImageSourcePropType | undefined;
  name: string;
  active: boolean;
};

type Props = {
  tab: Tap;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const TabIcon = ({tab, onPress}: Props) => {
  return (
    <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
      <Image
        source={tab.icon}
        style={{
          tintColor: tab.active ? COLORS.primary : COLORS.grey,
        }}
      />
      <Text
        style={{
          color: tab.active ? COLORS.primary : COLORS.grey,
          marginTop: 5,
          ...FONTS.h5,
        }}>
        {tab.name}
      </Text>
    </TouchableOpacity>
  );
};

export default TabIcon;
