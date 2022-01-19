import React, {useEffect, useRef} from 'react';
import * as Animatable from 'react-native-animatable';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon, {Icons} from './Icons';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const Note = () => {
  return (
    <View style={styles.container}>
      <Text>Note</Text>
    </View>
  );
};

const Wallet = () => {
  return (
    <View style={styles.container}>
      <Text>Wallet</Text>
    </View>
  );
};

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    icon: 'book',
    type: Icons.AntDesign,
    component: Home,
  },
  {
    route: 'Note',
    label: 'Note',
    icon: 'search',
    type: Icons.Feather,
    component: Note,
  },
  {
    route: 'Wallet',
    label: 'Wallet',
    icon: 'plus-square',
    type: Icons.Feather,
    component: Wallet,
  },
  {
    route: 'Calendar',
    label: 'Calendar',
    icon: 'calendar',
    type: Icons.Entypo,
    component: Calendar,
  },
];

const animate1 = {
  0: {scale: 0.5, translateY: 7},
  0.92: {translateY: -34},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 7},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.2},
  0.8: {scale: 0.7},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            type={item.type}
            name={item.icon}
            style={styles.icons}
            color={focused ? '#fff' : '#ccc'}
          />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    height: 90,
    position: 'absolute',
    right: 5,
    left: 5,
    bottom: 5,
    backgroundColor: '#373337',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#fff',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    padding: 7,
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fe12c4',
    borderRadius: 25,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
    color: '#fff',
  },
});

export default Navigation;
