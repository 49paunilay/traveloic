import React, { useContext, useEffect, useState } from 'react'
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import StylishText from '../components/StylishText'
import * as ImagePicker from 'expo-image-picker';
import { PostBody } from '../helperUtil'
import { useRoute } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AntDesign } from '@expo/vector-icons';
import { taskContext } from '../context/DataWrapper'





function LineItems({ navigation }) {
    const [image, setImage] = useState(null);
    const [body, setBody] = useState("")
    const route = useRoute()
    const id = route.params?.id
    const [uniquePost, setUniquePost] = useState(undefined)
    const taskContextDetails = useContext(taskContext)
    console.log("Id ",typeof id)
 
    // getting allPosts
    useEffect(() => {
        async function getAllPosts() {
            try {
                const allPostJSON = await AsyncStorage.getItem("postsNP")
                const posts = JSON.parse(allPostJSON)
                const selectedPost = posts.filter(post => post.id === id)
                setUniquePost(selectedPost[0])
            } catch (e) {
                console.log(e)
            }

        }
        getAllPosts()
    }, [route.params?.id])





    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ width: "100%", margin: 5 }}>
                <StylishText style={{ fontWeight: 'bold', textAlign: "center" }}>{uniquePost?.title}</StylishText>
                <View>
                    <Text style={styles.text}>
                        {uniquePost?.body}
                    </Text>
                    <Image source={{ uri: uniquePost?.pic }} style={{ width: 'auto', height: 200 }} />
                </View>
                <View style={{ alignItems:'center', paddingTop:10}}>
                    <TouchableOpacity onPress={async()=>{
                        const allPosts = await AsyncStorage.getItem("postsNP")
                        const posts = JSON.parse(allPosts)
                        const filteredPosts = posts.filter(post=>post.id !== id)
                        await AsyncStorage.setItem("postsNP",JSON.stringify(filteredPosts))
                        taskContextDetails.setTasks(taskContext=>taskContext-1)
                        navigation.goBack()
                    }}>
                    <AntDesign name="delete" size={24} color="red" />

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    text: {
        fontSize: 16,
        marginBottom: 5
    },
});

export default LineItems