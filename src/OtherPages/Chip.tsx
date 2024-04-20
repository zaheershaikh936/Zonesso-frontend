/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { Chip, Searchbar } from 'react-native-paper';
import { styles } from '../Css/globe';


export default function ChipPage() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    return (
        <View >
            <Searchbar
                 placeholder="Search Keywords"
                 onChangeText={onChangeSearch}
                 value={searchQuery}
                 style={styles.searchBar}
                 inputStyle={styles.searchInput}
                placeholderTextColor="#999"
            />
            <Chip style={[styles.flex ,styles.chipStyle, styles.justifyBetween]} onPress={() => console.log('Pressed')}>
                <Text style={[styles.link, styles.textSm, styles.p5]}>Aventador</Text>
            </Chip>
        </View>
    );
}
