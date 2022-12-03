import {View, Text} from 'react-native';
import React from 'react';
import {CustomButtomTab} from '../components';

const Settings = ({navigation, route}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FBFBFB'}}>
      <Text>Settings</Text>

      <CustomButtomTab navigation={navigation} route={route} />
    </View>
  );
};

export default Settings;
