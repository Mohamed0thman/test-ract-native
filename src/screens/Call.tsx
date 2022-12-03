import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {CSSProperties} from 'react';
import {COLORS, FONTS, images, SIZES} from '../constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Call'>;

const Call = ({route, navigation}: Props) => {
  function CircleButton({
    src,
    styleContainer,
  }: {
    src?: ImageSourcePropType | undefined;
    styleContainer?: ViewStyle;
  }) {
    return (
      <TouchableOpacity
        style={{
          ...styleContainer,

          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Image source={src} />
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
      }}>
      <Image
        source={images.characterOne}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          resizeMode: 'cover',
        }}
      />
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingTop: SIZES.margin,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.leftIcon} />
        </TouchableOpacity>

        <View>
          <Image source={images.characterTwo} />

          <CircleButton
            styleContainer={{
              width: 32,
              height: 32,
              borderRadius: 32 / 2,
              backgroundColor: '#FF4A6B',
              position: 'absolute',
              bottom: -10,
            }}
            src={images.rotateIcon}
          />
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          bottom: 200,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.white,
          }}>
          Darlene Robertson
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.white,
          }}>
          09:12
        </Text>
      </View>

      <View
        style={{
          marginTop: 'auto',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',

          marginBottom: 70,
        }}>
        <CircleButton
          styleContainer={{
            width: 47,
            height: 47,
            borderRadius: 47 / 2,
            backgroundColor: 'rgba(237, 241, 245, 0.25)',

            marginRight: SIZES.padding * 2,
          }}
          src={images.micrphoneIcon}
        />
        <CircleButton
          styleContainer={{
            width: 47,
            height: 47,
            borderRadius: 47 / 2,
            backgroundColor: '#FF4141',
            marginRight: SIZES.padding * 2,
          }}
          src={images.callIcon}
        />
        <CircleButton
          styleContainer={{
            width: 47,
            height: 47,
            borderRadius: 47 / 2,
            backgroundColor: COLORS.white,
          }}
          src={images.videoIcon}
        />
      </View>
    </View>
  );
};

export default Call;
