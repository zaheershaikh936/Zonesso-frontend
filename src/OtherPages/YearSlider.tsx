/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { RangeSlider } from '@react-native-assets/slider';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../Css/globe';

export default function YearSliderElement() {
  const [range, setRangeValue] = useState([]);
    return (
      <View style={[styles.borderDefault, styles.mt20]}>
            <Text style={[styles.textSecondary, styles.textSm, styles.extremeBold, styles.mb20]}>Year</Text>
          <RangeSlider
            range={[1990, 2024]}
            minimumValue={1990}
            maximumValue={2024}
            step={1}
            minimumRange={1}
            crossingAllowed={true}
            outboundColor="#EAECF0"
            inboundColor="#ea462f"
            thumbTintColor="white"
            thumbStyle={styles.thumbStyle}
            vertical={false}
            enabled={true}
            trackHeight={5}
            thumbSize={20}
            slideOnTap={true}
            onValueChange={(rangeValue: any) => { setRangeValue(rangeValue); }}
        />
          <View style={[styles.flex, styles.justifyBetween , styles.mt10]}>
            <Text style={[styles.textSecondary, styles.textSm, styles.extremeBold]}>{range[0] || 1990}</Text>
            <Text style={[styles.link , styles.textSm, styles.extremeBold]}>{range[1] || 2024}</Text>
          </View>
        </View>
    );
}
