import React from 'react';
// import React from 'react';
// import {View} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import {Home, Message, Profile, Settings} from '../screens';

// import {COLORS, icons} from '../constants';
// import CustomTabBarIcon from '../components/CustomTabBarIcon';
// import {
//   HomeStackNavigator,
//   MessageStackNavigator,
//   ProfileStackNavigator,
//   SettingStackNavigator,
// } from './Stack';

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         headerShown: false,
//         tabBarStyle: {
//           position: 'absolute',
//           left: 0,
//           bottom: 0,
//           right: 0,
//           borderTopWidth: 0,
//           backgroundColor: 'white',
//           borderTopLeftRadius: 30,
//           borderTopRightRadius: 30,
//           elevation: 0,
//           height: 70,
//         },
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={HomeStackNavigator}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabBarIcon
//               focused={focused}
//               icon={
//                 <icons.HomeIcon
//                   width={20}
//                   height={20}
//                   fill={focused ? '#4CA6A8' : '#A8A8AA'}
//                 />
//               }
//               label="Home"
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Message"
//         component={MessageStackNavigator}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabBarIcon
//               focused={focused}
//               icon={
//                 <icons.ChatIcon
//                   width={20}
//                   height={20}
//                   fill={focused ? '#4CA6A8' : '#A8A8AA'}
//                 />
//               }
//               label="Message"
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileStackNavigator}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabBarIcon
//               focused={focused}
//               icon={
//                 <icons.ProfileIcon
//                   width={20}
//                   height={20}
//                   fill={focused ? '#4CA6A8' : '#A8A8AA'}
//                 />
//               }
//               label="Profile"
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={SettingStackNavigator}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabBarIcon
//               focused={focused}
//               icon={
//                 <icons.SettingIcon
//                   width={20}
//                   height={20}
//                   fill={focused ? '#4CA6A8' : '#A8A8AA'}
//                 />
//               }
//               label="Setting"
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;
