import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Post} from '../types/post';
import {COLORS, FONTS, SIZES} from '../constants';

const PostCard = ({postData}: {postData: Post}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        marginBottom: SIZES.padding,
        padding: 15,
        borderRadius: SIZES.padding,
      }}>
      <Image
        source={{uri: postData.employerImage}}
        style={{
          width: 50,
          height: 50,
          borderRadius: SIZES.radius,
          marginRight: SIZES.padding,
        }}
      />

      <View
        style={{
          marginRight: 'auto',
        }}>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.dark,
            marginBottom: SIZES.base,
          }}>
          {postData.title}
        </Text>
        <Text>{postData.jobType}</Text>
      </View>

      <Text
        style={{
          ...FONTS.h5,
        }}>
        {postData.salary}/m
      </Text>
    </TouchableOpacity>
  );
};

export default PostCard;
