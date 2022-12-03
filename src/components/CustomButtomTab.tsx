import {View, Text} from 'react-native';
import React from 'react';
import {COLORS, images, SIZES} from '../constants';
import TabIcon from './TabIcon';

const CustomButtomTab = ({navigation, route}: any) => {
  console.log(route);

  const tabs = [
    {name: 'Home', icon: images.homeIcon, active: route.name === 'Home'},
    {name: 'Message', icon: images.chatIcon, active: route.name === 'Message'},
    {
      name: 'Profile',
      icon: images.profileIcon,
      active: route.name === 'Profile',
    },
    {
      name: 'Settings',
      icon: images.settingIcon,
      active: route.name === 'Settings',
    },
  ];
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        height: 70,
        borderTopRightRadius: SIZES.base * 3,
        borderTopLeftRadius: SIZES.base * 3,

        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding * 2,
      }}>
      {tabs.map((item, i) => {
        return (
          <TabIcon
            key={i}
            tab={item}
            onPress={() => navigation.navigate(item.name)}
          />
        );
      })}
    </View>
  );
};

export default CustomButtomTab;
