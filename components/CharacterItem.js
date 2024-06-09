import React from 'react';
import {View, Text, Image,StyleSheet,FlatList} from 'react-native';
import Http from '../libs/http';

const CharacterItem = ({item})=>{
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.text}>{item.species}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>{}</Text>
                <Image source={{uri:item.image}} 
                    style={styles.tinyLogo}></Image>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 10,
        margin:1,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        backgroundColor:'#000',
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    row:{
        flexDirection:'row',
    },
    nameText:{
        color: '#fff',
        fontSize: 10,
        marginRight: 8,
        fontWeight: 'bold',
    },
    text:{
        color: '#fff',
        fontSize: 10,

    },
    priceText:{
        fontSize:12,
        color:'#035'
    },
});

export default CharacterItem;