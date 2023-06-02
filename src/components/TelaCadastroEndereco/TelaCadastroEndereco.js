import React from 'react';
import {
    Form,
    FormContainer,
    Input,
    SendButton,
    StyledLabel,
} from '../TelaLogin/styled';
// import { BackToLoginButton } from '../TelaCadastro/styled';

const TelaCadastroEndereco = () => {
    // [ x ] Um input para endereço
    // [ x ] Um input para número da residência
    // [ x ] Um input para complemento
    // [ x ] Um input para telefone
    // [ x ] Um botão de Confirmar
    return (
        <FormContainer>
            <h1>Tela Cadastro Endereco </h1>

            <Form>
                <StyledLabel htmlFor="endereco">
                    Endereço:
                    <Input id="endereco" />
                </StyledLabel>

                <StyledLabel htmlFor="numeroResidencia">
                    Número da Residência:
                    <Input id="numeroResidencia" />
                </StyledLabel>

                <StyledLabel htmlFor="complemento">
                    Complemento:
                    <Input id="complemento" />
                </StyledLabel>

                <StyledLabel htmlFor="telefone">
                    Telefone:
                    <Input id="telefone" />
                </StyledLabel>

                <SendButton onClick={console.log('cliquei')}>
                    Confirmar
                </SendButton>

                {/* <BackToLoginButton onClick={console.log('cliquei')}>
                    Já possuo cadastro
                </BackToLoginButton> */}
            </Form>
        </FormContainer>
    );
};

export default TelaCadastroEndereco;
