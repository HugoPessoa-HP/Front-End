import React, { useState, createContext, ReactNode, useEffect } from 'react'
import { api } from '../services/API'
import AsyncStorage from '@react-native-async-storage/async-storage'

type AuthContextData = {
    user: User;
    isAuthenticated: boolean;
    loginI: (credencial: LoginU) => Promise<void>;
    load: boolean;
    loading: boolean; 
    logout: () => Promise<void>;  
}

type User = {
    id: string;
    name: string;
    email: string;
    token: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type LoginU = { 
    email: string;
    senha: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function Context({children}: AuthProviderProps){
    const [user, setUser] = useState<User>({
        id: '',
        name: '',
        email: '',
        token: ''
    });

    const isAuthenticated = !!user.id;
    const [load, setLoad] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getUser(){

            const user = await AsyncStorage.getItem('pesquisador');
            let hasUser: User = JSON.parse(user || '{}')

            if(Object.keys(hasUser).length > 0){
                api.defaults.headers.common['Authorization'] = `Beader ${hasUser.token}`

                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    email:hasUser.email,
                    token: hasUser.token,
                })
            }

            setLoading(false);
        
        }

        getUser();

    }, [])
    
    async function loginI({email, senha}: LoginU){
        setLoad(true);

        try{
            const response = api.post('rota', {
                email,
                senha
            })

            const [id, name, token] = (await response).data 

            const data = {
                ...(await response).data
            };

            await AsyncStorage.setItem('@pesquisador', JSON.stringify(data))

            api.defaults.headers.common['Authorization'] = `Beader ${token}`

            setUser({
                id,
                name,
                email,
                token,
            })

            setLoad(false);

        }catch(err){
            console.log(" Erro ao realizar Login ")
            setLoad(false);
        }
    }

    async function logout(){
        await AsyncStorage.clear()
        .then( () => {
            setUser({
                id: '',
                name: '',
                email: '',
                token: '',
            })
        } )
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, loginI, load, loading, logout }}>
            {children}

        </AuthContext.Provider>
    )
}