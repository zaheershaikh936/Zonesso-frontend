/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../Css/globe';
import ProductCard from '../OtherPages/ProductCard';
import { get } from '../api';

export default function Product({ navigation }: any) {
  const [product, setProduct] = useState<any>([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        type ProductT = {
          image: string,
          distance: string
          title: string,
          logo: string
        }
        const response = await get('/product');
        const jsonData: ProductT[] = await response.data;
        setProduct(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <ScrollView>
      <View style={[styles.mt20]}>
        <Text style={[styles.container, styles.textBlack, styles.textSm, styles.extremeBold]}>Showing <Text style={[styles.link]}>{product.length}</Text> results in Dubai</Text>
        {
          product.map((item: any, index: number) => {
            return (
              <ProductCard key={index} props={item} navigation={navigation} />
            );
          })
        }
      </View>
    </ScrollView>
  );
}

