import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { taskContext } from '../context/DataWrapper';



const ListItem = ({ item, navigation }) => {
  console.log("Item ", item)
  return <LinearGradient
    colors={['#00FF00', '#007F00']} // Green shades
    style={styles.gradient}>
    <TouchableOpacity onPress={() => navigation.navigate("Details", { id: item.id })}>
      <View style={styles.item}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  </LinearGradient>
};

const StylishListView = ({ navigation }) => {
  const [data, setData] = useState([])
  const taskContextDetails = useContext(taskContext)


  useEffect(() => {
    async function getAllPosts() {
      try {
        const allPostJSON = await AsyncStorage.getItem("postsNP")
        const posts = JSON.parse(allPostJSON)
        console.log("posts ", posts)
        setData(posts)
      } catch (e) {
        console.log(e)
      }

    }
    getAllPosts()
  },[taskContextDetails.tasks])
  return <View style={styles.listContainer}>
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem button item={item} navigation={navigation} />}
      key={item => item.id}
    />
  </View>
}




const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white', // Ensure text is readable over the gradient background
  },
  listContainer: {
    width: "100%",
    height: '100%'
  }
});

export default StylishListView;
