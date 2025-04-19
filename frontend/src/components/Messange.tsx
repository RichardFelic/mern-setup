import {useEffect, useState} from 'react';
import api from '../api/axios.api';

interface IMessage {
    message: string;
}

export const Message = () => {
    const [message, setMessage] = useState<IMessage>({message: ''});

    useEffect(() => {
        const getMessage = async () => {
            try {
                const response = await api.get('/'); 
                setMessage(response.data);
            } catch (error) {
                console.error('Error al obtener el mensaje:', error);
            }
        };

        getMessage();
    }, []);

    return (
        <div>
            <h1>{message.message}</h1>
        </div>
    );
};