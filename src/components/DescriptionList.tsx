import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

const DescriptionList = ({qualifications}: {qualifications: string[]}) => {
  return (
    <View style={{marginTop: SIZES.padding * 2}}>
      <FlatList
        keyExtractor={(item, i) => 'qualification' + i}
        data={qualifications}
        ListHeaderComponent={
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.dark,
              marginBottom: SIZES.padding,
            }}>
            Qualifications:
          </Text>
        }
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Text
              style={{
                alignSelf: 'flex-start',
                marginRight: 7,
                fontSize: 20,
              }}>
              &#x2022;
            </Text>
            <Text
              style={{
                ...FONTS.body3,
              }}>
              {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default DescriptionList;
