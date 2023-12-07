import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView,TextInput } from 'react-native';
import PizzaTranslator from './src/components/pizza/PizzaTranslator';

export default function App() {
  return (
    // <ScrollView>
    //   <Text>
    //     Some text
    //   </Text>
    //   <View>
    //     <Text>Some other text inside the div</Text>
    //     <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}}
    //     style={{width:200,height:200}}
    //     />
    //   </View>
    //   <TextInput
    //   style={{
    //     height: 40,
    //     borderColor: 'gray',
    //     borderWidth: 1,
    //   }}
    //   defaultValue='Write some text'
    //   />
      

      
    // </ScrollView>




    <View>
      <PizzaTranslator/>
    </View>
  );
}


