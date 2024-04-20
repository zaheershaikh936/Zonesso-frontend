/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../Css/globe';
import { StackPages } from '../common/stack';

type navigationT = {
  navigation: any,
  props: any
}
const ProductCard = ({ navigation, props }: navigationT) => {
  const singleProduct = () => { navigation.navigate(StackPages.SINGLEPRODUCT, { productId: props.id, navigation }); };
  return (
    <TouchableOpacity onPress={singleProduct}>
      <View style={[styles.mt20, styles.container, styles.productBorder]}>
        <View>
          <Image
            source={{ uri: props.images[0] }}
              style={styles.productImage}
          />
        </View>
        <View style={[ styles.mt10]}>
          <Text style={[styles.textBlack, styles.link, styles.textMd, styles.extremeBold]}>AED {props.price }</Text>
          <Text style={[styles.textBlack, styles.textMd, styles.extremeBold, styles.mt5]}>{props.title}</Text>
          <Text style={[styles.textSecondary, styles.mt5]}> {props.tags.map((tag: string, index: number) => { return (<Text key={index}> {tag} |</Text>);})}  </Text>
          <Text style={[styles.textSecondary, styles.mt5]}>Year: { props.year}</Text>
                <View style={[styles.flex, styles.mt10, styles.gap1]}>
                    <View>
                        <Image
                          style={[styles.roundedXs]}
                          source={{uri: props.showroom.logo}}
                          width={50}
                          height={50}/>
                      </View>
                      <View>
                          <Text style={[styles.textSecondary]}>
                          {props.showroom.location}
                          </Text>
                          <Text style={[styles.textSecondary, styles.extremeBold]}>Posted on: {props.created.split('T')[0]}</Text>
                          <Text style={[styles.textSecondary]}>
                            Posted By: {props.showroom.title }
                          </Text>
                      </View>
              </View>
              </View>
              <View style={[styles.flex, styles.mt20, styles.gap2, styles.mb10]}>
                  <TouchableOpacity style={[styles.ProductButton , styles.chatButton]}>
                      <Text style={[styles.link, styles.textCenter, styles.textSm, styles.extremeBold]}>Chat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.ProductButton , styles.primaryBgColor]}>
                      <Text style={[styles.textBlack, styles.textCenter, styles.textSm, styles.textWhite, styles.extremeBold]}>Call</Text>
                  </TouchableOpacity>
              </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
