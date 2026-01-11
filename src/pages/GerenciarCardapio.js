import React from 'react';
import { Link } from 'react-router-dom';

function GerenciarCardapio() {
    const styles = {
        container: { padding: '40px', fontFamily: 'sans-serif', color: '#333' },
        backLink: { textDecoration: 'none', color: '#007bff', marginBottom: '20px', display: 'inline-block' }
    };

    return (
        <div style={styles.container}>
            <Link to="/dashboard" style={styles.backLink}>&larr; Voltar para o Dashboard</Link>
            <h1>Gerenciamento de Cardápio</h1>
            <p>Em breve, aqui você poderá adicionar, editar e remover os itens do seu cardápio.</p>
        </div>
    );
}

export default GerenciarCardapio;
