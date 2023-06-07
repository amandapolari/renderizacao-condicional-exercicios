# Renderização condicional

# Exercício 1

Nossa aplicação vai ser para o cadastro do usuário em um aplicativo de delivery.<br>
Já existe uma tela de Cadastro para as informações de login da pessoa, então vamos criar um componente de cadastro chamado TelaCadastroEndereco, onde vocês vão pegar mais informações de contato e endereço para entrega:

- Crie uma pasta dentro da pasta Components chamada TelaCadastroEndereco
- Crie um arquivo chamado TelaCadastroEndereco.js
- Crie a estrutura de um componente dentro do arquivo (lembre de exportar o componente)
- O componente deve possuir:
    - Um input para endereço
    - Um input para número da residência
    - um input para complemento
    - um input para telefone
    - um botão de Confirmar

# Exercício 2

- Adicione o componente criado **TelaCadastroEndereco** para seguir o fluxo da renderização condicional. O fluxo de telas em um cadastro deve ocorrer na seguinte ordem: 
    - TelaCadastro >>> TelaCadastroEndereco >>> TelaPrincipal
    
# Exercício 3

Implemente o controle dos inputs e faça com que o botão **Entrar**, o botão **Cadastrar** e o botão **Confirmar** imprimam no console os dados preenchidos nos inputs em um único objeto (cada input será uma propriedade do mesmo).

# Segue o link do template no codesandbox
https://codesandbox.io/s/renderizacao-condicional-exercicios-5ebrrb
