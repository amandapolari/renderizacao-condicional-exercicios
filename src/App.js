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
    // ESTADOS MUDANÇA DE TELA:
    const [telaAtual, setTelaAtual] = useState('TelaLogin');

    // FUNÇÕES MUDANÇAS DE TELA:
    const mudarTela = (novaTela) => {
        setTelaAtual(novaTela);
    };

    // ----------------------

    // ESTADOS PARA FORM LOGIN:
    const [dadosFormLogin, setDadosFormLogin] = useState({
        email: '',
        password: '',
    });

    // FUNÇÃO QUE CAPTURA E SETA VALORES - LOGIN
    const capturaInfosLogin = (event) => {
        event.preventDefault();
        // console.log(event.target.email.value);
        // console.log(event.target.email.value);
        setDadosFormLogin({
            ...dadosFormLogin, // mantém as propriedades existentes
            email: event.target.email.value,
            password: event.target.password.value,
        });
    };

    // MOSTRANDO DADOS - LOGIN
    // console.log(dadosFormLogin);

    // ESTADOS PARA O FORM CADASTRAR:
    const [dadosFormCadastrar, setDadosFormCadastrar] = useState({
        name: '',
        email: '',
        senha: '',
        confirmacao: '',
    });

    // FUNÇÃO QUE CAPTURA E SETA VALORES - CADASTRAR
    const capturaInfosCadastrar = (event) => {
        event.preventDefault();
        // console.log(event.target.name.value)
        setDadosFormCadastrar({
            ...dadosFormCadastrar,
            name: event.target.name.value,
            email: event.target.email.value,
            senha: event.target.senha.value,
            confirmacao: event.target.confirmacao.value,
        });
    };
    // MOSTRANDO DADOS - CADASTRAR
    console.log(dadosFormCadastrar);

    // ESTADOS PARA O FORM CONFIRMAR:
    // const [dadosFormCadastrarEndereco, setDadosFormCadastrarEndereco] =
    //     useState({
    //         endereco: '',
    //         numero: '',
    //         complemento: '',
    //         telefone: '',
    //     });

    // FUNÇÃO QUE CAPTURA E SETA VALORES - CONFIRMAR

    // MOSTRANDO DADOS - CONFIRMAR
    // console.log();

    // -------------------------------

    const renderizaTela = () => {
        switch (telaAtual) {
            case 'TelaLogin':
                return (
                    <TelaLogin
                        mudarTela={mudarTela}
                        capturaInfosLogin={capturaInfosLogin}
                    />
                );

            case 'TelaCadastro':
                return (
                    <TelaCadastro
                        mudarTela={mudarTela}
                        capturaInfosCadastrar={capturaInfosCadastrar}
                    />
                );

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
