import React, { useState, createContext, ReactNode, useEffect } from 'react'
import { api } from '../services/API'
import AsyncStorage from '@react-native-async-storage/async-storage'

type AuthContextData = {
    pesquisador: PesquisadorProps;
    isAuthenticated: boolean;
    loginI: (credencial: LoginProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    logout: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

type LoginProps = { 
    email: string;
    password: string;
}

type PesquisadorProps = {
    nome: string;
    email: string;
    cpf: string;
    token: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function Context({children}: AuthProviderProps){
    const [pesquisador, setPesquisador] = useState<PesquisadorProps>({
        nome: '',
        email: '',
        cpf: '',
        token: '',
    });

    const isAuthenticated = !!pesquisador.nome;

    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(false);
/*
    useEffect(() => {

    async function getPesquisador(){  

            const pesquisador = await AsyncStorage.getItem('pesquisador');
            let hasUser: Pesquisador = JSON.parse(pesquisador || '{}')

            if(Object.keys(hasUser).length > 0){
                api.defaults.headers.common['Authorization'] = `Beader ${hasUser.token}`

                setPesquisador({
                    id: hasUser.id,
                    name: hasUser.name,
                    email:hasUser.email,
                    token: hasUser.token,
                })
            }

            setLoading(false);
        
        }

        getPesquisador();

    }, [])
*/
    async function loginI({email, password}: LoginProps){
        setLoadingAuth(true);

        try{
            const response = await api.post('/login', {
                email,
                password
            })

          const { nome, cpf, token } = response.data;

            const data = {
                ...(await response).data
            };


            await AsyncStorage.setItem('@pesquisador', JSON.stringify(data))

            api.defaults.headers.common['Authorization'] = `Beader ${token}`

            setPesquisador({
                nome,
                email,
                cpf,
                token,
            })

            setLoadingAuth(false);

        }catch(err){
            console.log(" Erro ao realizar Login ")
            setLoadingAuth(false);
        }
    }

    async function logout(){
        await AsyncStorage.clear()
        .then( () => {
            setPesquisador({
                nome: '',
                cpf: '',
                email: '',
                token: '',
            })
        } )
    }

    return(
        <AuthContext.Provider value={{ pesquisador, isAuthenticated, loginI, loadingAuth, loading, logout}}>
            {children}

        </AuthContext.Provider>
    )
}