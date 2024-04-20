/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo';
import { styles } from '../Css/globe';

export default function SearchBar() {
  return (
    <View style={[styles.flex, styles.justifyBetween, styles.mt10]}>
      <View style={[styles.flex ]}>
        <Icon name="location-pin" size={30} color="#F06100" />
        <Text style={[styles.textBlack, styles.mt10, styles.extremeBold]}>Dubai </Text>
      </View>
      <AntIcon name="search1" size={25} color="black" />
    </View>
  );
}
