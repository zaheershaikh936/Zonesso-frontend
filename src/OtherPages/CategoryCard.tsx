/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../Css/globe';
import { StackPages } from '../common/stack';

type cardProps = {
    image: string;
    category: string;
    navigation : any
}

const Card = ({ image, category, navigation }: cardProps) => {
    const productPage = () => {
        console.log('object');
        navigation.navigate(StackPages.PRODUCT);
    };
    return (
        <TouchableOpacity onPress={productPage}>
            <View style={[styles.card, styles.mt20]}>
                <Image source={{ uri: image }} style={styles.categoryImage} />
                <Text style={[styles.textBlack, styles.bold, styles.textCenter]}>{category}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Card;
