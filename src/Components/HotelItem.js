import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

import HotelRating from './HotelRating';
import Colors from '../constants/colors.js';
import { Dimensions } from 'react-native';
import HotelModal from './HotelModal';


const HotelItem = ({item}) => {

    const [reservationText, setReservationText] = useState('Réserver');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(()=>{
        const screenWidth = Dimensions.get('screen').width;

        if(screenWidth >= 768){
            setReservationText('Réserver maintenant');
        }
        else{
            setReservationText('Réserver');
        }
    });

    function calculateOldPrice(offer, newPrice){
        if(newPrice.includes(','))
            newPrice = newPrice.replace(',', '');
        // converting strings to numbers
        const newPriceNb = parseInt(newPrice.substring(1));
        const offerNb = parseInt(offer.substring(offer.size));

        const oldPrice = String(parseInt((100 * newPriceNb) / (100 - offerNb)));
        // checking , placement
        if(oldPrice.length > 3){
            return "$ " + oldPrice.slice(0, oldPrice.length - 3) + "," + oldPrice.slice(oldPrice.length - 3);
        }
        else{
            return "$ " + oldPrice;
        }
    }

    return (
    <>
        <HotelModal 
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            price={item.HotelPrice}
        />
        <View 
            style={{
                flexDirection: 'row',
            }}
        >   
            <View>
                {
                    item.Offer && 
                    <View style={styles.offer}>
                        <Text
                            style={styles.offerText}
                        >
                            {item.Offer}
                        </Text>
                    </View>
                }
                <Image 
                    source={item.HotelImg}
                    style={styles.image}
                    resizeMode={'contain'}
                />
            </View>
            <View
                style={{...styles.rightView}}
            >
                <Text 
                    style={{...styles.title}}
                    numberOfLines={2}
                >
                    {item.HotelName}
                </Text>
                <HotelRating 
                    rating={item.rating} 
                />
                <View 
                    style={styles.priceView} 
                >
                    {
                        item.Offer &&
                        <Text 
                            style={styles.oldPrice} 
                        >
                            {calculateOldPrice(item.Offer, item.HotelPrice)}
                        </Text>
                    }
                    <Text 
                        style={styles.newPrice} 
                    >
                        {item.HotelPrice}
                    </Text>
                </View>
                <TouchableOpacity 
                    style={styles.reservation}
                    onPress={()=> {
                        setModalVisible(true)
                    }}
                >
                    <Text style={styles.reservationText} >
                        {reservationText}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    offer: {
        backgroundColor: Colors.Orange,
        height: 50,
        width: 50,
        borderRadius: 25,
        position: 'absolute',
        top: -5,
        left: -10,
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    offerText: {
        color: Colors.White,
        fontSize: 15,
        fontFamily: 'serif'
    },

    image: {
        width: 180,
        height: 170,
    },

    rightView: {
        alignItems: 'flex-start',
        flexShrink: 1,
        paddingLeft: 10,
        marginTop: 20
    },

    title: {
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },

    priceView:{
        flexDirection: 'row',
        marginVertical: 10
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        marginRight: 10,
        fontFamily: 'serif'
    },
    newPrice: {
        color: Colors.Blue,
        fontFamily: 'serif'
    },

    reservation: {
        backgroundColor: Colors.Green,
        borderColor: Colors.Blue,
        borderWidth: 0.5,
        padding: 5,
        paddingHorizontal: 8
    },
    reservationText: {
        color: Colors.White,
        fontSize: 11,
        fontFamily: 'serif'
    },
});


export default HotelItem
