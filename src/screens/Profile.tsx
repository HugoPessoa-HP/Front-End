import { Button , StyleSheet , Text , View, SafeAreaView , TouchableOpacity} from "react-native";
import React , { useState , useEffect} from 'react';
import { CameraView , useCameraPermissions } from "expo-camera";

export default function Foto(){
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();

    /*
    useEffect(() => {
        (async () => {
            const { status } = await CameraView.
        })
    }, [])
    */
    
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
       <View style={styles.container}>
        <CameraView style={styles.camera} facing={'back'}>
            <View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}> Foto </Text>
                </TouchableOpacity>
            </View>
        </CameraView>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    camera: {
        flex: 1,
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    }
})