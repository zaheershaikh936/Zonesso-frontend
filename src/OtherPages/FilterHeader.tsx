/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from '../Css/globe';

export default function FilterHeader() {
  return (
    <View style={[styles.flex, styles.justifyBetween]}>
      <TouchableOpacity>
        <Icon name="arrowleft" size={25} color="black" />
      </TouchableOpacity>
      <Text style={[styles.textBlack, styles.textLg, styles.extremeBold]}>Filter</Text>
      <TouchableOpacity>
        <Text style={[styles.textBlack, styles.link, styles.extremeBold]}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
