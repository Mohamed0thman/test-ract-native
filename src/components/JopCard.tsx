import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Job} from '../types/job';

import {COLORS, SIZES, FONTS, icons} from '../constants';
import {SheetManager} from 'react-native-actions-sheet';

type Props = {
  jobdata: Job;
};

const JopCard = ({jobdata}: Props) => {
  const {employerImage, employerName, location, title, salary} = jobdata;
  return (
    <TouchableOpacity
      style={{
        width: 260,
        height: 160,
        padding: SIZES.padding,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.padding,
        shadowOffset: {width: -2, height: 4},
        shadowColor: ' rgba(0, 0, 0, 0.2)',
        elevation: 10,
        marginRight: SIZES.padding,
      }}
      onPress={() => {
        SheetManager.show('example-two', {
          payload: {value: 'Hello World'},
        });
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image source={{uri: employerImage}} style={{width: 30, height: 30}} />
        <icons.LoveIcon />
      </View>
      <Text
        style={{
          ...FONTS.h5,
          color: COLORS.darkGrey,
          marginTop: 5,
          marginBottom: 15,
        }}>
        {employerName}
      </Text>
      <Text style={{...FONTS.h4, color: COLORS.dark, marginBottom: 10}}>
        {title}
      </Text>

      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 12,
            color: COLORS.dark,
            marginRight: 5,
          }}>
          {salary}/m
        </Text>
        <Text style={{...FONTS.body5, color: COLORS.darkGrey}}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default JopCard;
