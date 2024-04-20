/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from '../Css/globe';

export default function AdsBanner() {
  return (
      <View style={[styles.mt30]}>
        <TouchableOpacity>
            <Image source={require('../images/slide.png')} style={ styles.adsBanner} />
        </TouchableOpacity>
    </View>
  );
}
