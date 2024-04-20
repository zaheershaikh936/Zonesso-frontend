/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../Css/globe';
import CarouselPage from '../OtherPages/Carousel';
import Grid from '../OtherPages/Grid';
import ProductSearchBar from '../OtherPages/ProductSearchBar';
import { get } from '../api';



export default function SingleProduct({ route }: any) {
  const { productId, navigation } = route.params;
  const [product, setProduct] = useState<any>([]);

  useEffect(() => {
    const fetchShowroom = async () => {
      try {
        type showroomT = {
          image: string,
          distance: string
          title: string,
          logo: string
        }
        const response = await get(`/product/${productId}`);
        const jsonData: showroomT[] = await response.data;
        setProduct(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShowroom();
  },[productId]);
  return (
    <>
      <ScrollView>
        <ProductSearchBar navigation={navigation} />
        <View>
          <CarouselPage images={product.images} />
        </View>
        <View style={[styles.container, styles.mt20, styles.borderDefault]}>
          <View style={[styles.flex, styles.gap3]}>
            <Text style={[styles.textBlack, styles.extremeBold, styles.textLg, styles.premiumText]}>AED {product.price}</Text>
            <Text style={[styles.textWhite, styles.extremeBold, styles.p5, styles.textMd, styles.premium]}>{product.label }</Text>
          </View>
          <Text style={[styles.textBlack, styles.textMd, styles.extremeBold, styles.mt5]}>{product.title}</Text>
        </View>
        <View>
          <Text style={[styles.container, styles.mb20, styles.textBlack, styles.extremeBold, styles.mt20, styles.textSm]}>Details</Text>
          <Grid title={'Trim'} description={'J'} />
          <Grid title={'Year'} description={'2021'} />
          <Grid title={'Kilometers'} description={'600'} />
          <Grid title={'Regional Specs'} description={'European Specs'} />
          <Grid title={'Door'} description={'2 Door'} />
          <Grid title={'Posted On'} description={'March 23, 2024'} />
        </View>
        <View style={[styles.container, styles.borderDefault]}>
          <Text style={[styles.mb20, styles.textBlack, styles.extremeBold, styles.mt20, styles.textSm]}>Description</Text>
          <Text style={[styles.mb20, styles.textBlack, styles.mt5, styles.textSm]}>{ product.description}</Text>
        </View>
        <View style={[styles.container, styles.borderDefault]}>
          <Text style={[styles.mb20, styles.textBlack, styles.extremeBold, styles.mt20, styles.textSm]}>Location</Text>
          <Text style={[styles.mb20, styles.textBlack, styles.mt5, styles.textSm]}>UAE Dubai DXB</Text>
        </View>
        <View style={[styles.alineEnd, styles.bgWhite, styles.container, styles.mt10, styles.flex, styles.gap2]}>
          <TouchableOpacity style={[styles.ProductButton, styles.chatButton]} onPress={() => console.log('Chat button pressed')}>
            <Text style={[styles.link, styles.textCenter, styles.p10, styles.textSm, styles.extremeBold]}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.ProductButton, styles.premiumBg]} onPress={() => console.log('Call button pressed')}>
            <Text style={[styles.buttonText, styles.textCenter, styles.p10 ,styles.textSm, styles.extremeBold]}>Call</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
