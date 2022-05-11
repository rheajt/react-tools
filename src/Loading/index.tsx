import * as React from 'react';
import { messages } from './messages';

interface LoadingProps {
    text?: string;
}

export const Loading: React.FC<LoadingProps> = () => {
    const [message, setMessage] = React.useState('');
    const waitTime = Math.ceil(Math.random() * 100 * 7 + 1);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const rand = Math.floor(Math.random() * messages.length);

            const [msg] = messages.splice(rand, 1);
            setMessage(msg);

            messages.push(msg);
        }, waitTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                minHeight: 150,
                paddingTop: 30,
                textAlign: 'center',
                zIndex: '9999',
                position: 'absolute',
                width: '100%',
                height: '100%',
                color: 'white',
                fontSize: 36,
                backgroundColor: '#00000094',
                top: 0,
                left: 0,
            }}
        >
            <h1 style={{ color: 'white' }}>
                <p>{message}</p>
            </h1>
        </div>
    );
};
