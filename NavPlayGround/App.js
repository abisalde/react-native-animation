/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardView from 'react-native-cardview';
import {NavigationContainer} from '@react-navigation/native';
import SwitchSelector from 'react-native-switch-selector';
import Navigation from './routes';

const colors = {
  white: '#fff',
  purple: '#7a44cf',
};

// const images = {
//   masculino: require(''),
//   feminino: require('./assets/img/feminino.png'),
// }
const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CardView
          style={{width: '50%', height: 100}}
          cardElevation={3}
          cardMaxElevation={5}
          cornerRadius={5}>
          <Text
            style={{
              alignItems: 'center',
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}>
            Elevation 0
          </Text>
        </CardView>
        <SwitchSelector
          initial={0}
          onPress={value => console.log('The value is: ', value)}
          textColor={colors.purple} //'#7a44cf'
          selectedColor={colors.white}
          buttonColor={colors.purple}
          borderColor={colors.purple}
          hasPadding
          options={[
            {label: 'Feminino', value: 'f'}, //images.feminino = require('./path_to/assets/img/feminino.png')
            {label: 'Masculino', value: 'm'}, //images.masculino = require('./path_to/assets/img/masculino.png')
          ]}
        />
        {/*<Navigation /> */}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
