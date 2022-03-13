import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraTest = () => {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    Camera.requestCameraPermission().then(status => {
      if (status === 'authorized') {
        setHasPermission(true);
      }
    });
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;

  if (!hasPermission) {
    return (
      <View style={{flex: 1}}>
        <Text>No permission</Text>
      </View>
    );
  }

  if (device == null) {
    return <ActivityIndicator color="blue" />;
  }

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default CameraTest;
