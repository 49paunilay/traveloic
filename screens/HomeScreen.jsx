import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import StylishListView from '../components/StylishListView';
import { AntDesign } from '@expo/vector-icons';



function HomeScreen({ navigation }) {

    return (
        <View>
            <StylishListView navigation={navigation}/>
            <TouchableOpacity
                onPress={() => navigation.navigate("Add")}
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    height: 70,
                    backgroundColor: '#fff',
                    borderRadius: 100,
                }}
            >
                <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );

}

export default HomeScreen