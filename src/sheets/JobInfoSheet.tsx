import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import ActionSheet, {
  ActionSheetRef,
  SheetProps,
} from 'react-native-actions-sheet';
import {CompanyList, CustomButton, DescriptionList, ReviewsList} from '../components';
// import ButtonIcon from '../components/ButtonIcon';
// import CompanyList from '../components/CompanyList';
// import CustomButton from '../components/CustomButton';
// import DescriptionList from '../components/DescriptionList';
// import ReviewsList from '../components/ReviewsList';
import {COLORS, FONTS, images, SIZES} from '../constants';

import jobInfo from '../data/jobInfo.json';

const ButtonNav = ({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}) => {
  return (
    <TouchableOpacity
      style={{
        padding: 18,
        backgroundColor: active ? COLORS.primary : '#FBFBFB',
        borderRadius: SIZES.radius,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: active ? '#FBFBFB' : COLORS.grey,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

function JobInfoSheet({sheetId, payload}: SheetProps<{data: string}>) {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const [nav, setNav] = useState<string>('Description');

  const renderSubNav = () => {
    if (nav === 'Description') {
      return (
        <DescriptionList qualifications={jobInfo.description.qualifications} />
      );
    } else if (nav === 'Company') {
      return <CompanyList company={jobInfo.company} />;
    }
    else {
      return <ReviewsList review={jobInfo.reviews} />;
    }
  };

  return (
    <ActionSheet
      id={sheetId}
      ref={actionSheetRef}
      containerStyle={{
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: '88%',
        backgroundColor: '#FBFBFB',
      }}
      indicatorStyle={{
        width: 100,
      }}
      gestureEnabled={true}>
      <View
        style={{
          padding: 20,
          width: '100%',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image
          source={{uri: jobInfo.employerImage}}
          style={{
            width: 70,
            height: 70,
          }}
        />
        <Text style={{...FONTS.h2, color: COLORS.dark, marginTop: SIZES.base}}>
          {jobInfo.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: SIZES.base,
          }}>
          <Text style={{...FONTS.h5, color: COLORS.dark, marginRight: 7}}>
            {jobInfo.employerName}
          </Text>
          <View
            style={{
              width: 15,
              borderWidth: 1.5,
              borderColor: COLORS.dark,
              marginRight: 7,
            }}
          />
          <Image style={{marginRight: 7}} source={images.locationIcon} />
          <Text style={{...FONTS.body4}}>{jobInfo.location}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '70%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Image source={images.clockIcon} />
          <Text
            style={{
              ...FONTS.body2,
              marginRight: 'auto',
              marginLeft: 8,
            }}>
            Full Time
          </Text>
          <Text style={{...FONTS.body3}}>{jobInfo.salary}/m</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: SIZES.padding,
          }}>
          <ButtonNav
            label="Description"
            active={nav === 'Description'}
            onPress={() => setNav('Description')}
          />
          <ButtonNav
            label="Company"
            active={nav === 'Company'}
            onPress={() => setNav('Company')}
          />
          <ButtonNav
            label="Reviews"
            active={nav === 'Reviews'}
            onPress={() => setNav('Reviews')}
          />
        </View>
        {renderSubNav()}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: SIZES.padding,
            marginTop: 'auto',
          }}>
          <CustomButton
            label="Apply Now"
            containerStyle={{
              width: '80%',
              backgroundColor: COLORS.primary,
              height: 54,
              borderRadius: SIZES.radius,
            }}
          />
          <CustomButton
            icon={images.chatIcon}
            iconStyle={{
              tintColor: COLORS.white,
            }}
            containerStyle={{
              backgroundColor: COLORS.primary,
              height: 54,
              width: 54,
              borderRadius: SIZES.radius,
            }}
          />
        </View>
      </View>
    </ActionSheet>
  );
}

export default JobInfoSheet;
