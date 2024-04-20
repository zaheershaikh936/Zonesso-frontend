/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../Css/globe';
import { StackPages } from '../common/stack';
import Heading from './heading';

export default function Showrooms({ navigation }: any) {
  const allShowroomPage = () => {
    navigation.navigate(StackPages.PRODUCT);
  };
  return (
        <View style={[styles.mt30, styles.flex, styles.justifyBetween]}>
          <Heading title="Top Showrooms" style={[styles.textBlack, styles.extremeBold, styles.textMd]} />
          <TouchableOpacity onPress={allShowroomPage}>
            <Text style={[styles.textBlack, styles.link, styles.extremeBold]}>View all</Text>
          </TouchableOpacity>
        </View>
  );
}
