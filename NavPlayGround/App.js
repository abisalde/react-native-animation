/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview';
import {NavigationContainer} from '@react-navigation/native';
import SwitchSelector from 'react-native-switch-selector';
import Navigation from './routes';
// import AppTab from './src/curveBottomTab';
// import {PermissionModal, PermissionItem} from 'react-native-permissions-modal';

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
        <Navigation />
      </View>
    </NavigationContainer>
  );
};

// const App = () => {
//   const ref = React.useRef().permModal;
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={() => ref.openModal()}>
//         <Text style={{color: '#31243f'}}>Open Permission Modal</Text>
//       </TouchableOpacity>
//       <PermissionModal
//         panGestureEnabled={false}
//         closeOnOverlayTap={false}
//         ref={ref}>
//         <PermissionItem />
//         <PermissionItem
//           title="Camera"
//           iconStatusColor="red"
//           subtitle="To access camera features"
//           source={{
//             uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
//           }}
//           onPress={() => alert('hello')}
//         />
//         <PermissionItem
//           title="Internet"
//           source={{
//             uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
//           }}
//           subtitle="To access the services, give us the permission"
//         />
//       </PermissionModal>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
