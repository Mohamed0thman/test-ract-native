import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {SIZES, COLORS, FONTS, images} from '../constants';

import {useAppDispatch, useAppSelector} from '../store/hooks';
import {login} from '../store/slices/userSlice';

import usersData from '../data/users.json';

import {RootStackParamList} from '../navigation/Stack';
import {User} from '../types/user';
import {CustomButton, CustomInput} from '../components';

type EyeProps = {
  onPress: (event: GestureResponderEvent) => void;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const EyeButtonIcon = ({onPress}: EyeProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={images.eyeIcon} />
    </TouchableOpacity>
  );
};

const Login = ({route, navigation}: Props) => {
  const [hidePassword, SetHidePassword] = useState<boolean>(true);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);

  const currentUser = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  const handleOnSubmit = () => {
    const user = usersData.find((user: User) => {
      return user.email === email;
    });

    if (!user) {
      setError('Not Founded');

      return;
    }
    if (user.password != password) {
      setError('Wrong password');
      return;
    }

    dispatch(login(user));
    console.log('don');
  };
  useEffect(() => {
    if (currentUser.isUser) {
      navigation.navigate('AppDrawer');
    }
  }, [currentUser.isUser]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View
            style={{
              width: '70%',
              marginBottom: SIZES.base * 3,
            }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.dark,
                marginBottom: SIZES.base,
              }}>
              Welcome Back!
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.darkGrey,
                marginTop: 5,
              }}>
              Fill your details or continue with social media
            </Text>
          </View>
          <View style={{marginBottom: SIZES.padding * 2}}>
            {error && (
              <Text
                style={{
                  ...FONTS.h5,
                  color: COLORS.error60,
                  marginBottom: 10,
                }}>
                {error}
              </Text>
            )}
            <CustomInput
              placeholder="Email Address"
              placeholderTextColor={COLORS.grey}
              containerStyle={{marginBottom: SIZES.margin}}
              leftIcon={images.messageicon}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <CustomInput
              secureTextEntry={hidePassword}
              containerStyle={{marginBottom: SIZES.base}}
              placeholder="Password"
              placeholderTextColor={COLORS.grey}
              leftIcon={images.lockIcon}
              rightIcon={
                <EyeButtonIcon onPress={() => SetHidePassword(!hidePassword)} />
              }
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <TouchableOpacity>
              <Text style={{textAlign: 'right'}}>Forget Password?</Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            label="LOG IN"
            containerStyle={{
              height: 50,
              backgroundColor: COLORS.primary,
              marginBottom: SIZES.margin,
              borderRadius: SIZES.radius,
            }}
            onPress={() => handleOnSubmit()}
          />
          <View
            style={{
              marginBottom: SIZES.padding * 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                marginBottom: SIZES.base * 3,
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  position: 'absolute',
                  borderBottomColor: COLORS.darkGrey,
                  borderBottomWidth: 1,
                  height: '50%',
                  width: '5%',

                  left: -25,
                }}
              />
              <Text
                style={{
                  color: COLORS.darkGrey,
                }}>
                Or Continue with
              </Text>
              <View
                style={{
                  alignSelf: 'center',
                  position: 'absolute',
                  borderBottomColor: COLORS.darkGrey,
                  borderBottomWidth: 1,
                  height: '50%',
                  width: '5%',

                  right: -25,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  marginRight: SIZES.padding,
                }}>
                <Image source={images.googleIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={images.facebookIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.body3, color: COLORS.darkGrey}}>
              New User?
            </Text>
            <TouchableOpacity>
              <Text style={{...FONTS.h4, color: COLORS.dark}}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.light,
  },
  inner: {
    flex: 1,
    paddingHorizontal: SIZES.base * 3,
    marginTop: SIZES.padding * 2,
    backgroundColor: COLORS.light,
    justifyContent: 'center',
  },
});

export default Login;
