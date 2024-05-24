import React, { useState } from "react";
import { useCameraPermissions , CameraView } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View , SafeAreaView} from 'react-native';

export default function ViewCamera(){

    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
      }
    
      if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
          <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
      }

    return(
        <SafeAreaView style={styles.container}>
            <CameraView style={styles.camera} facing={'back'}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
      },
      button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
      }
})