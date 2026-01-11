import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const userEmail = localStorage.getItem('userEmail');

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userEmail');
        navigate('/');
    };

    const styles = {
        dashboardContainer: { fontFamily: 'sans-serif', color: '#333' },
        dashboardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', background: '#fff', borderBottom: '1px solid #e7e7e7' },
        userInfo: { display: 'flex', alignItems: 'center', gap: '15px' },
        logoutButton: { padding: '8px 15px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
        dashboardMain: { padding: '40px' },
        dashboardNav: { marginTop: '30px' },
        navLink: { display: 'inline-block', padding: '12px 20px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }
    };

    return (
        <div style={styles.dashboardContainer}>
            <header style={styles.dashboardHeader}>
                <h2>Painel de Controle</h2>
                <div style={styles.userInfo}>
                    <span>{userEmail || 'Usuário'}</span>
                    <button onClick={handleLogout} style={styles.logoutButton}>Sair</button>
                </div>
            </header>
            <main style={styles.dashboardMain}>
                <h1>Bem-vindo ao seu Painel!</h1>
                <p>A partir daqui, você poderá gerenciar seus agentes e configurações.</p>
                <nav style={styles.dashboardNav}>
                    <Link to="/cardapio" style={styles.navLink}>
                        Gerenciar Cardápio
                    </Link>
                </nav>
            </main>
        </div>
    );
}

export default Dashboard;
