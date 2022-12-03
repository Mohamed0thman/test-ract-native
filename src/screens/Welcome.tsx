import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View, Image} from 'react-native';
import {RootStackParamList} from '../navigation/Stack';

import {COLORS, SIZES, images, FONTS} from '../constants';
import {useAppSelector} from '../store/hooks';
import {CustomButton} from '../components';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const Welcome = ({route, navigation}: Props) => {
  const currentUser = useAppSelector(state => state.user);

  return (
    <View style={styles.container}>
      <Image source={images.logoIcon} />
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Image source={images.banner} />
      </View>
      <Text
        style={{
          ...FONTS.h1,
          textAlign: 'center',
          color: COLORS.dark,
          paddingHorizontal: SIZES.margin,
          marginTop: SIZES.padding * 3,
        }}>
        Find a Perfact Job Match
      </Text>
      <Text
        style={{
          ...FONTS.body3,
          textAlign: 'center',
          color: COLORS.darkGrey,
          marginTop: 5,
        }}>
        Finding your dream job is more easire and faster with JobHub
      </Text>
      <CustomButton
        containerStyle={{
          width: 261,
          marginTop: SIZES.padding * 2,
          height: 50,
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.radius,
          alignSelf: 'center',
        }}
        label="Let’s Get Started"
        onPress={() =>
          currentUser?.isUser
            ? navigation.navigate('AppDrawer')
            : navigation.navigate('Login')
        }
        icon={images.arrowIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
  },
});

export default Welcome;
