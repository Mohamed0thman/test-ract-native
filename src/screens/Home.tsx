import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import {getAll} from '../store/slices/postsAndJobSlice';
import {useAppSelector} from '../store/hooks';
// import CustomInput from '../components/CustomInput';
import JopCard from '../components/JopCard';
import {COLORS, FONTS, images, SIZES} from '../constants';

import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
// import CustomButtomTab from '../components/CustomBottomTabs';
// import ButtonIcon from '../components/ButtonIcon';
import {SheetProvider} from 'react-native-actions-sheet';
import {
  CustomInput,
  PostCard,
  CustomButton,
  CustomButtomTab,
} from '../components';

const Home = ({route, navigation}: any) => {
  const {posts, jops} = useAppSelector(state => state.postAndJob);

  const ITEM_WIDTH = 260; // fixed wedth of item component
  const getItemLayout = (data: any, index: number) => {
    return {
      length: ITEM_WIDTH,
      offset: ITEM_WIDTH * data.length,
      index,
    };
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SheetProvider>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: '#FBFBFB',
            }}>
            <View
              style={{
                paddingHorizontal: SIZES.padding,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.base * 3,
              }}>
              <CustomInput
                containerStyle={{flexBasis: '80%'}}
                placeholder="Serach here..."
              />

              <CustomButton
                containerStyle={{
                  backgroundColor: COLORS.primary,
                  width: 54,
                  height: 54,

                  borderRadius: 15,
                }}
                icon={images.FilterIcon}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.padding,
                marginTop: SIZES.base * 3,
              }}>
              <Text style={{...FONTS.h3, color: COLORS.dark}}>Popular Job</Text>
              <Text style={{...FONTS.body4, color: COLORS.darkGrey}}>
                Show All
              </Text>
            </View>

            {jops && (
              <FlatList
                data={jops}
                horizontal
                renderItem={({item, index}) => {
                  return <JopCard jobdata={item} />;
                }}
                style={{
                  flexGrow: 0,
                  marginTop: SIZES.padding,
                }}
                keyExtractor={(item, index) => `job_${index}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingLeft: SIZES.padding,
                }}
                getItemLayout={getItemLayout}
              />
            )}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.padding,
                marginTop: SIZES.base * 3,
              }}>
              <Text style={{...FONTS.h3, color: COLORS.dark}}>Recent Post</Text>
              <Text style={{...FONTS.body4, color: COLORS.darkGrey}}>
                Show All
              </Text>
            </View>
            <MaskedView
              pointerEvents="none"
              style={{
                height: '50%',
                marginTop: 'auto',
              }}
              maskElement={
                <LinearGradient
                  pointerEvents="none"
                  colors={['#FFFFFF', '#FFFFFF00']}
                  style={styles.linearGradient}
                  locations={[0.3, 1]}></LinearGradient>
              }>
              <FlatList
                data={posts}
                horizontal={false}
                style={{
                  flexGrow: 0,
                  marginTop: SIZES.padding,
                }}
                renderItem={({item, index}) => {
                  return <PostCard postData={item} />;
                }}
                scrollEnabled
                keyExtractor={(item, index) => `post_${index}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: SIZES.padding,

                  paddingBottom: SIZES.padding * 3,
                }}
              />
            </MaskedView>

            <CustomButtomTab navigation={navigation} route={route} />
          </View>
        </SheetProvider>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
var styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
