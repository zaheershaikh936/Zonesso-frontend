/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { styles } from '../Css/globe';
import { StackPages } from '../common/stack';

export default function ProductSearchBar({ navigation }: any) {
    const productPage = () => {
        navigation.navigate(StackPages.PRODUCT);
    };
    const filterPage = () => {
        navigation.navigate(StackPages.FILTER, { navigation });
    };
    return (
        <View style={[ styles.container, styles.mb10 , styles.flex, styles.justifyBetween, styles.mt10]}>
            <View style={[styles.flex]}>
                <TouchableOpacity onPress={productPage}>
                    <FeatherIcon name="arrow-left" size={30} color="black" />
                </TouchableOpacity>
                <Text style={[styles.textBlack,styles.ml10 , styles.mt5, styles.extremeBold, styles.textSm]}>Dubai </Text>
            </View>
            <View style={[styles.flex, styles.gap1]}>

                <AntIcon name="search1" size={25} color="black" />
                <TouchableOpacity onPress={filterPage}>
                    <Ionicons name="filter" size={25} color="black" />
                </TouchableOpacity>
                <AntIcon name="hearto" size={25} color="black" />
            </View>
        </View>
    );
}
