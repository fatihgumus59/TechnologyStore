import React from 'react'
import {View,Text,Image, TextInput} from 'react-native';
import styles from './Card.styles';

const Card =({news})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:news.imgURL}}></Image>
            <View style={styles.inContainer}>
                <Text style={styles.title}>{news.title}</Text>
                <Text  style={styles.inStock}>{news.inStock === true ? <Text style={styles.stockTrue}>Sepete Ekle</Text> :'Stokta Yok'}</Text>
                <Text  style={styles.price}>{news.price}</Text>
            </View>
        </View>
    );
}

export default Card;