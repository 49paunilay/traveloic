import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Header = ({ title, onPressMenu }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.menuButton} onPress={onPressMenu}>
                <FontAwesome name="bars" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width:"100%",
        backgroundColor: '#2E8B57',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuButton: {
        marginRight: 10,
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;
