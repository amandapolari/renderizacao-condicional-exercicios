import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TelaLogin from './components/TelaLogin/TelaLogin';
import TelaCadastro from './components/TelaCadastro/TelaCadastro';
import TelaPrincipal from './components/TelaPrincipal/TelaPrincipal.js';
import TelaCadastroEndereco from './components/TelaCadastroEndereco/TelaCadastroEndereco';

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: lightslategray;
  }
`;
const MainContainer = styled.main`
    height: 100vh;
`;

function App() {
    const [telaAtual, setTelaAtual] = useState('TelaLogin');
    const [dadosFormLogin, setDadosFormLogin] = useState({
        email: '',
        password: '',
    });

    const mudarTela = (novaTela) => {
        setTelaAtual(novaTela);
    };

    // MUDAR NOME: set new values
    const capturaInfos = (event) => {
        event.preventDefault();
        // console.log(event.target.email.value);
        // console.log(event.target.email.value);
        setDadosFormLogin({
            ...dadosFormLogin, // mantém as propriedades existentes
            email: event.target.email.value,
            password: event.target.password.value,
        });
    };
    // Aqui tem resultado
    console.log(dadosFormLogin);

    const renderizaTela = () => {
        switch (telaAtual) {
            case 'TelaLogin':
                return (
                    <TelaLogin
                        mudarTela={mudarTela}
                        capturaInfos={capturaInfos}
                    />
                );

            case 'TelaCadastro':
                return <TelaCadastro mudarTela={mudarTela} />;

            case 'TelaCadastroEndereco':
                return <TelaCadastroEndereco mudarTela={mudarTela} />;

            case 'TelaPrincipal':
                return <TelaPrincipal mudarTela={mudarTela} />;

            default:
                return <p>Tela inválida</p>;
        }
    };

    return (
        <MainContainer>
            <GlobalStyled />

            {renderizaTela()}
        </MainContainer>
    );
}

export default App;
