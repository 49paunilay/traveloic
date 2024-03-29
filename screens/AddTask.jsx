import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import TextareaInput from '../components/TextareaInput';
import StylishButton from '../components/StylishButton';
import { PostBody } from '../helperUtil';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { taskContext } from '../context/DataWrapper';


const AddTask = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const taskContextDetails = useContext(taskContext)
  const [taskName, setTaskName] = useState('');
  const [body, setBody] = useState('');

  console.log("taskContextDetails ",taskContextDetails)

  const handleAddTask = async () => {
    // Perform any validation if needed

    const dataToBePosted = PostBody(taskName, body, image)
    const allPosts = await AsyncStorage.getItem("postsNP")
    const posts = JSON.parse(allPosts)
    if (!posts) {
      const allPost = []
      allPost.push(dataToBePosted)
      await AsyncStorage.setItem("postsNP", JSON.stringify(allPost))
      taskContextDetails.setTasks(taskContext=>taskContext+1)
    } else {
      posts.push(dataToBePosted)
      await AsyncStorage.setItem("postsNP", JSON.stringify(posts))
      taskContextDetails.setTasks(taskContext=>taskContext+1)
    }
    // Save task to backend or local storage
    // Navigate back to the main screen
    navigation.goBack();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Task Name"
        value={taskName}
        onChangeText={text => setTaskName(text)}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, width: "90%" }}
      />

      <TextareaInput text={body} setText={setBody} />
      <StylishButton title={"Pick Image"} onPress={pickImage} />
      {image && <Text>Image Added</Text>}

      <StylishButton title={"Add Task"} onPress={handleAddTask} />

    </View>
  );
};

export default AddTask;
