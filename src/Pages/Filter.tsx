/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';

import { styles } from '../Css/globe';
import Chip from '../OtherPages/Chip';
import DropDown from '../OtherPages/DropDown';
import FilterHeader from '../OtherPages/FilterHeader';
import Slider from '../OtherPages/Slider';

import { Checkbox } from 'react-native-paper';
import YearSlider from '../OtherPages/YearSlider';
import { category, city } from '../data/category';

export default function Filter() {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={[styles.container, styles.mt20]}>
      <FilterHeader />
      <View style={[styles.mt20]}>
        <DropDown label={'City'} defaultValue={'Dubai'} data={city} />
      </View>
      <View style={[styles.mt20]}>
        <DropDown label={'Category'} defaultValue={'Motors'} data={category} />
      </View>
      <View>
        <Slider />
      </View>
      <View style={[styles.mt10, styles.borderDefault]}>
        <Chip />
      </View>
      <View style={[styles.mt10]}>
        <YearSlider />
      </View>
      <View style={styles.mt10}>
        <Checkbox.Item
          label="Show ads by verified users"
          labelStyle={[styles.textBlack, styles.textSm, styles.extremeBold]}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>
    </View >
  );
}




