import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import {COLORS, images, SIZES} from '../constants';
import CustomButton from './CustomButton';
import {InitialState} from '../store/slices/userSlice';

type Props = {
  headerProps: DrawerHeaderProps;

  currentUser: InitialState;
};

export default function CustomHeader({headerProps, currentUser}: Props) {
  const {navigation} = headerProps;
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: SIZES.padding * 2,
        backgroundColor: '#FBFBFB',
      }}>
      <CustomButton
        icon={images.burgerIcon}
        containerStyle={{
          width: 44,
          height: 44,
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.radius,
        }}
        onPress={() => navigation.toggleDrawer()}
      />
      <Image
        source={{uri: currentUser.user?.image}}
        style={{width: 44, height: 44, borderRadius: 44 / 2}}
      />
    </View>
  );
}
