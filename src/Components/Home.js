import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import Colors from '../constants/colors.js';

import HotelItem from './HotelItem';

const hotelsData = [
    {
        HotelName: "Pear Tree Hotel",
        rating: 3,
        HotelPrice: "$ 765",
        HotelImg: require("../assets/Images/hotel_one.jpeg"),
        Offer: "30%",
    },
    {
        HotelName: "Hilton Hotel & Resort",
        rating: 4,
        HotelPrice: "$ 524",
        HotelImg: require("../assets/Images/hotel_two.jpeg"),
        Offer: "50%",
    },
    {
        HotelName: "San Francisco",
        rating: 5,
        HotelPrice: "$ 1,289",
        HotelImg: require("../assets/Images/hotel_three.jpeg"),
    },
    {
        HotelName: "Kempinski Hotel CA",
        rating: 4,
        HotelPrice: "$ 987",
        HotelImg: require("../assets/Images/hotel_four.jpeg"),
    },
];

const Home = () => {
	return (
		<View
			style={{
				flex: 1,
                backgroundColor: 'white'
			}}
		>
			<FlatList
				data={hotelsData}
				renderItem={({item})=> 
                    <HotelItem item={item} />
                }
				keyExtractor={item => item.HotelName}
				contentContainerStyle={{
					paddingVertical: '8%',
                    paddingHorizontal: '5%',
				}}
				ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
			/>
		</View>
	)
}

export default Home
