import React, { useState, createContext, ReactNode, useEffect } from 'react'
import { api } from '../services/API'
import AsyncStorage from '@react-native-async-storage/async-storage'

type AuthContextData = {
    pesquisador: PesquisadorProps;
    isAuthenticated: boolean;
    loginI: (credentials: LoginProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    logout: () => Promise<void>;
    estado: EstadosProps | [];
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

type EstadosProps = {
    nome_Estado: string
}

export const AuthContext = createContext({} as AuthContextData);

export function ContextProvider({children}: AuthProviderProps){
    const [pesquisador, setPesquisador] = useState<PesquisadorProps>({
        nome: '',
        email: '',
        cpf: '',
        token: '',
    }); 

    const isAuthenticated = !!pesquisador.nome;

    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [estado, setEstado] = useState<EstadosProps | []>([])

    useEffect(() => {

    async function getPesquisador(){  

            // Pegar os dados salvos do usuário
            const pesquisador = await AsyncStorage.getItem('pesquisador');
            let hasPesquisador: PesquisadorProps = JSON.parse(pesquisador || '{}')

            // Verificar se recebemos a informação
            if(Object.keys(hasPesquisador).length > 0){
                api.defaults.headers.common['Authorization'] = `Beader ${hasPesquisador.token}`

                setPesquisador({
                    nome: hasPesquisador.nome,
                    email:hasPesquisador.email,
                    cpf: hasPesquisador.cpf,
                    token: hasPesquisador.token,
                })
            }

            setLoading(false);
        
        }

        getPesquisador();

    }, [])

    useEffect(() => {
        async function listaEstados(){
            const estados = await api.get('/estados');
            setEstado(estados.data);
        }
        listaEstados();
    }, [])

    async function loginI({email, password}: LoginProps){
        setLoadingAuth(true);

        try{
        
            const response = await api.post('/login', {
                email,
                password
            })

          const { nome, cpf, token } = response.data;

            const data = {
                ...response.data
            };

            await AsyncStorage.setItem('@pesquisador', JSON.stringify(data))

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setPesquisador({
                nome,
                email,
                cpf,
                token,
            })
            
            setLoadingAuth(false);

        }catch(err){
            console.log(" Erro ao Realizar Login ");
            setLoadingAuth(false);
        }
    }

    async function logout(){
        await AsyncStorage.clear()
        .then( () => {
            setPesquisador({
                nome: '',
                email: '',
                cpf: '',
                token: '',
            })
        })
    }

    return(
        <AuthContext.Provider value={{ pesquisador, isAuthenticated, loginI, loadingAuth, loading, logout, estado}}>
            {children}

        </AuthContext.Provider>
    )
}