import React, { useState } from 'react'
import { TextInput, View,Text } from 'react-native'

const PizzaTranslator = () => {
const [text,setText]=useState('');

  return (
    <View style={{padding:10}}>
            <TextInput style={{height:40}}
              placeholder='Please enter a text'
              onChangeText={newText=>setText(newText)}
              defaultValue={text}
            />
            <Text>
                {text.split(' ').map(word=>word && '🍕').join('')}
            </Text>
    </View>
  )
}

export default PizzaTranslator
