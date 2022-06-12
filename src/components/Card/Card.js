import React from 'react'
import {View,Text,Image, TextInput} from 'react-native';
import styles from './Card.styles';

const Card =({products})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:products.imgURL}}></Image>
            <View style={styles.inContainer}>
                <Text style={styles.title}>{products.title}</Text>               
                <Text  style={styles.price}>{products.price}</Text>
                <Text  style={styles.inStock}>{products.inStock === true ? <Text style={styles.stockTrue}>SEPETE EKLE</Text> :'STOKTA YOK'}</Text>
            </View>
        </View>
    );
}

export default Card;