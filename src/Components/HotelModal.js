
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    TextInput,
    StyleSheet,
    Image
} from 'react-native';


export default function HotelModal({modalVisible, setModalVisible, price}){
   
    const [nbChambres, setNbChambres] = useState(1);
    const [nbNuits, setNbNuits] = useState(1); 

    function calculatePrixTotal(){
        //Checking numbers validity
        const nbChambresInt = parseInt(nbChambres) || 1;
        const nbNuitsInt = parseInt(nbNuits) || 1;
        let priceNumber = price.substring(1);

        //convert price to int and check ,
        if(priceNumber.includes(',')){
            priceNumber = parseInt(priceNumber.replace(',', ''));
            const prixTotal = String(priceNumber * nbNuitsInt * nbChambresInt);
            return prixTotal.slice(0, prixTotal.length - 3) + "," + prixTotal.slice(prixTotal.length - 3);
        }
        else{
            return String(parseInt(priceNumber) * nbNuitsInt * nbChambresInt);
        }
    }

    return(
        <Modal 
            animationType = {"slide"} 
            transparent = {false}
            visible = {modalVisible}
        >
            <View
                style={{
                    paddingHorizontal: '6%',
                    paddingVertical: '20%'
                }}
            >
                <TouchableOpacity 
                    style={styles.close}
                    onPress={() => {
                        setNbChambres(1)
                        setNbNuits(1)
                        setModalVisible(false)
                    }}
                >
                    <Image
                        source={require('../assets/close.png')}
                        resizeMode={'contain'}
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                </TouchableOpacity>
                
                <View
                    style={styles.subView}
                >
                    <Text
                        style={{width: '50%'}}
                    >
                        Nombre des chambres à réserver:
                    </Text>
                    <TextInput
                        defaultValue='1'
                        keyboardType='numeric'
                        onChangeText={text => setNbChambres(text)}
                        style={{
                            borderWidth: 1,
                            width: '45%'
                        }}
                    />
                </View>
                <View style={{height: 20}} />
                <View
                    style={styles.subView}
                >
                    <Text
                        style={{ width: '50%'}}
                    >
                        Nombre des nuits
                    </Text>
                    <TextInput
                        defaultValue='1'
                        keyboardType='numeric'
                        onChangeText={text => setNbNuits(text)}
                        style={{
                            borderWidth: 1,
                            width: '45%'
                        }}
                    />
                </View>
                <View
                    style={styles.lineView}
                />

                <View
                    style={styles.subView}
                >
                    <Text>
                        Prix total
                    </Text>
                    <Text
                        style={{
                            position: 'absolute',
                            right: 20
                        }}
                    >
                        $ {calculatePrixTotal()}
                    </Text>
                </View>
            </View>
        </Modal>
    ) 
}

const styles = StyleSheet.create({
    close: {
        position: 'absolute',
        top: '10%',
        right: '6%',
    },  
    subView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    lineView: {
        borderWidth: 0.5,
        marginHorizontal: 5,
        marginVertical: 30
    },
});