import {View, Text} from 'react-native';
import React from 'react';
import {FONTS} from '../constants';

export default function CompanyList({company}: {company: string}) {
  return (
    <View
      style={{
        marginTop: 20,
      }}>
      <Text
        style={{
          ...FONTS.body4,
          lineHeight: 30,
        }}>
        {company}
      </Text>
    </View>
  );
}
