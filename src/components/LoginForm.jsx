import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'project-ID': "f9804dc2-d6bd-4582-af7b-1d0cc1a1b7d1", 'User-Name': username, 'User-Secret': password }

        try {
             await axios.get('https://api.chatengine.io/chats', { headers: authObject });

           localStorage.setItem('username', username);
           localStorage.setItem('password', password);

           window.location.reload();
        } catch (error) {
           setError('Ooops, incorrect credentials.')
        }
        
    }

    return ( 
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Happening!</h1>
                <h2 className="title">Chat Application</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>  
    );
}

export default LoginForm;