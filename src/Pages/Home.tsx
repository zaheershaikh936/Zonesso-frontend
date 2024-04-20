/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../Css/globe';
import AdsBanner from '../OtherPages/AdsBanner';
import Card from '../OtherPages/Card';
import CategoryCard from '../OtherPages/CategoryCard';
import Showrooms from '../OtherPages/Showrooms';
import { get } from '../api';
import { StackPages } from '../common/stack';
import SearchBar from './SearchBar';
export default function Home({ navigation }: any) {
  const productPage = () => {
    navigation.navigate(StackPages.PRODUCT);
  };
  const [category, setCategory] = useState<any>([]);
  const [showroom, setShowroom] = useState<any>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await get('/category');
        const jsonData = await response.data;
        setCategory(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchShowroom = async () => {
      try {
        type showroomT = {
          image: string,
          distance:string
          title: string,
          logo:string
        }
        const response = await get('/showroom');
        const jsonData: showroomT[] = await response.data;
        setShowroom(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
    fetchShowroom();
  },[]);
  return (
    // <ScrollView>
      <View style={styles.container}>
        <SearchBar />
        <View style={styles.mt5}>
          <FlatList
            data={category}
            numColumns={3}
            renderItem={({ item }) => <CategoryCard category={item.name} image={item.image} navigation={navigation} /> }
            />
        </View>
        <View>
          <AdsBanner />
          <Showrooms navigation={navigation} />
          <ScrollView horizontal={true} style={[styles.mt20, styles.mb50]}>
            {
              showroom.map((card: any, index: number) => {
                return (
                  <TouchableOpacity key={index} onPress={productPage}>
                  <Card
                    key={index}
                    image={card.image}
                    cardStyle={[styles.ml15, styles.showroomImg, styles.roundedSm]}
                    heading={card.title} headingStyle={[styles.textBlack, styles.mt5, styles.bold]}
                    description={card.distance} descriptionStyle={[styles.textBlack, styles.bold]}
                    logo={card.logo}/>
                </TouchableOpacity>
              );
              }
            )}
          </ScrollView>
        </View>
      </View>
    // </ScrollView>
  );
}
