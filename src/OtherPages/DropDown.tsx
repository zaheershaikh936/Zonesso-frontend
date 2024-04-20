/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from '../Css/globe';

type dropdownT = {
    label: string;
    defaultValue: string;
    data: any;
}
export default function DropDown({defaultValue, label, data}:dropdownT) {
  const [value, setValue] = useState(defaultValue);

  return (
    <View>
        <Text style={[styles.textBlack]}>{ label }</Text>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemTextStyle={styles.textBlack}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={defaultValue}
            searchPlaceholder="Search..."
            value={value}
            onChange={(item: any) => {
            setValue(item.name);
            }}
        />
    </View>
  );
}
