import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../../contexts/context'

export default function Dashboard(){
    const { logout } = useContext(AuthContext);

    return(
        <View>
            <Text> Texto Exemplo </Text>
            <Button title='Logout' onPress={logout}/>
        </View>
    )
}