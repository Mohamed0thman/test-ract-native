import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Home, Message, Profile, Settings} from '../screens';
import React, {useEffect} from 'react';
import {logout} from '../store/slices/userSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {DrawerActions} from '@react-navigation/native';
import {CustomHeader} from '../components';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({route, navigation}: any) {
  const currentUser = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!currentUser.isUser) {
      navigation.navigate('Welcome');
    }
  }, [currentUser.isUser]);

  return (
    <Drawer.Navigator
      screenOptions={{
        header: props => (
          <CustomHeader currentUser={currentUser} headerProps={props} />
        ),
      }}
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Call"
              onPress={() => {
                navigation.dispatch(DrawerActions.closeDrawer());
                navigation.navigate('Call');
              }}
            />
            <DrawerItem
              label="Logout"
              onPress={() => {
                navigation.dispatch(DrawerActions.closeDrawer());
                dispatch(logout());
              }}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Message" component={Message} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
