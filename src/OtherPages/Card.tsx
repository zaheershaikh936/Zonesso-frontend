/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../Css/globe';

type cardProps = {
  cardStyle: any,
  image?: string,
  heading: string,
  headingStyle: any
  descriptionImg?: string,
  description?: string
  descriptionStyle?: any
  logo: string
}
export default function Card({ image, logo, heading, description, headingStyle, descriptionStyle, cardStyle }: cardProps) {
  return (
    <View>
      <Image source={{ uri: image }} style={cardStyle} />
      <View style={styles.flex}>
          <View style={[styles.ml15, styles.mt10]}>
            <Image source={{ uri: logo }} width={30} height={30} />
        </View>
        <View style={[styles.p5]}>
          <Text style={headingStyle}>{heading}</Text>
          <Text style={descriptionStyle}>{description}</Text>
        </View>
      </View>
    </View>
  );
}
