/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
import React from 'react';
import { Image, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { styles } from '../Css/globe';

type CarouselT = {
  images: string[];
};
const CarouselPage = ({ images }: CarouselT) => {

  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
      data={images}
      renderItem={({ item }) => (
        <View  style={styles.item}>
          <Image source={{ uri: item }} width={450} height={250} />
        </View>
      )}
    />
  );
};

export default CarouselPage;
