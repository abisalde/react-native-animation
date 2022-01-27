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
import CardView from 'react-native-cardview'
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './routes';
const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
		<CardView
		  style={{width: '50%', height: 100}}
          cardElevation={3}
          cardMaxElevation={5}
          cornerRadius={5}>
          <Text style={{alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,}}>
              Elevation 0
          </Text>
		</CardView>
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
