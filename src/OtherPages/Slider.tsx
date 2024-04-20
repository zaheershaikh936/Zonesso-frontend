/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { RangeSlider } from '@react-native-assets/slider';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../Css/globe';

export default function SliderElement() {
  const [range, setRangeValue] = useState([]);
    return (
      <View style={[styles.borderDefault, styles.mt20]}>
            <Text style={[styles.textSecondary, styles.textSm, styles.extremeBold, styles.mb20]}>Price (AED)</Text>
          <RangeSlider
            range={[10, 1000]}
            minimumValue={10}
            maximumValue={1000}
            step={10}
            minimumRange={10}
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
            <Text style={[styles.textSecondary, styles.textSm, styles.extremeBold]}>AED {range[0] || 0}</Text>
            <Text style={[styles.link , styles.textSm, styles.extremeBold]}>AED {range[1] || 10000}</Text>
          </View>
        </View>
    );
}
