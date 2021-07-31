import React from 'react';
import {
  View
} from 'react-native';
import Colors from '../constants/colors.js'
import { Rating } from 'react-native-ratings'


export default function HotelRating({rating}){
    return(
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'green'
            }}
        >
            <Rating
                startingValue={rating}
                ratingColor={Colors.Yellow}
                tintColor='#fff'
                imageSize={25}
                type='custom'
                readonly={true}
            />
        </View>
    )
}