import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        const params = new URLSearchParams();
        params.append('username', email);
        params.append('password', password);
        try {
            const response = await axios.post('https://.  plataforma-backend-production-c58b.up.railway.app  /token', params, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            if (response.data.access_token) {
                localStorage.setItem('accessToken', response.data.access_token);
                localStorage.setItem('userEmail', email);
                navigate('/dashboard');
            } else {
                setError('Falha ao obter o token de acesso.');
            }
        } catch (err) {
            // --- ESTA É A MUDANÇA ---
            // Vamos mostrar o erro real, não uma mensagem genérica.
            if (err.response) {
                // O servidor respondeu com um status de erro (4xx, 5xx)
                setError(`Erro do Servidor: ${err.response.status} - ${JSON.stringify(err.response.data)}`);
            } else if (err.request) {
                // A requisição foi feita mas não houve resposta (erro de rede, CORS)
                setError('Erro de Rede: O servidor não respondeu. Verifique o CORS ou a conexão.');
            } else {
                // Algo deu errado ao configurar a requisição
                setError(`Erro de Configuração: ${err.message}`);
            }
            // --- FIM DA MUDANÇA ---
        }
    };

    // Estilos (sem alteração)
    const styles = {
        loginContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' },
        loginBox: { padding: '40px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center', width: '360px' },
        inputGroup: { marginBottom: '20px', textAlign: 'left' },
        label: { display: 'block', marginBottom: '5px' },
        input: { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' },
        errorMessage: { color: 'red', marginBottom: '15px', wordWrap: 'break-word' },
        loginButton: { width: '100%', padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }
    };

    return (
        <div style={styles.loginContainer}>
            <div style={styles.loginBox}>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>Senha</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={styles.input} />
                    </div>
                    {error && <p style={styles.errorMessage}>{error}</p>}
                    <button type="submit" style={styles.loginButton}>Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
        
