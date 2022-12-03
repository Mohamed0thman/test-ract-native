import {View, Text} from 'react-native';
import React from 'react';
import {CustomButtomTab} from '../components';

const Profile = ({navigation, route}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FBFBFB'}}>
      <Text>Profile</Text>
      <CustomButtomTab navigation={navigation} route={route} />
    </View>
  );
};

export default Profile;
