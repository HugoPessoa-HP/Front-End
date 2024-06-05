import { Button , StyleSheet , Text , View, SafeAreaView , TouchableOpacity , Modal, BackHandler } from "react-native";
import React , { useState , useEffect , useRef } from 'react';
import { CameraView , useCameraPermissions } from "expo-camera";
import { Camera , useCameraDevice , useCameraPermission } from 'react-native-vision-camera';
import { StatusBar } from "expo-status-bar";

export default function Foto(){
/*    const [facing, setFacing] = useState('back');
    const { hasPermission , requestPermission } = useCameraPermission();
    const [ permission , setPermission ] = useState<null | boolean>(null);

    const device = useCameraDevice('back')
    const cameraRef = useRef<Camera>(null);

    
    useEffect(() => {
        (async () => {
            const status = await requestPermission();

            if(status){
                setPermission(true)
            }
        })()
    }, []);
    
    const startCamera = async () => {
        if(!cameraRef.current || !device) return;

        await cameraRef.current.takePhoto({
            flash: 'on',
            enableAutoRedEyeReduction: true
        })

    } 
    
    if (!permission || !device) {
        // Camera permissions are still loading.
        return <View></View>;
    }
    
    return(
       <View style={styles.container}>
        <StatusBar hidden />
        
        <Camera style={StyleSheet.absoluteFill}
        device={device}
        ref={cameraRef} 
        isActive={true} 
        orientation="portrait"
        resizeMode="cover"
        />

        <TouchableOpacity style={styles.button} onPress={startCamera}>
            <Text style={styles.buttonText}> Foto </Text>
        </TouchableOpacity>
       </View>
    )

*/
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
        width: 70,
        height: 70,
        borderRadius: 90,
        borderWidth: 8,
        borderColor: '#ffffff',
        position: 'absolute',
        bottom: 70,
        alignSelf: 'center',
        alignItems: 'center',
    }
})