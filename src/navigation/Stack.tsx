import {Alert, BackHandler, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome, Login, Call} from '../screens';
import DrawerNavigator from './Drawer';
import { useAppSelector } from '../store/hooks';

export type RootStackParamList = {
  AppDrawer: undefined;
  Welcome: undefined;
  Login: undefined;
  Call: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
  const currentUser = useAppSelector(state => state.user);

  useEffect(() => {
    if (currentUser.isUser) {
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }
  }, [currentUser.isUser]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome">
      {currentUser.isUser ? (
        <>
          <Stack.Screen name="AppDrawer" component={DrawerNavigator} />

          <Stack.Screen name="Call" component={Call} />
        </>
      ) : (
        <>
          <Stack.Screen name="Welcome" component={Welcome} />

          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
