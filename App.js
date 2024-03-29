import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LineItems from './screens/LineItems';
import AddTask from './screens/AddTask';
import {DataWrapper, TaskProvider} from './context/DataWrapper';


const Stack = createNativeStackNavigator();

export default function App() {
  const onMenuTouch = () => {
    console.log("Hwllo from menu")
  }
  return (
    <TaskProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{
            header: (props) => <Header title={"Traveloic"} onPressMenu={onMenuTouch} />
          }} />
          <Stack.Screen name="Details" component={LineItems} />
          <Stack.Screen name="Add" component={AddTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
