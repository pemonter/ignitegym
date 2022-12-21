# Ignite Gym

A ideia dessa aplicação é termos um app onde podemos consultar exercícios de academia. Nesse aplicativo vamos ter dois tipos de navegações, uma navegação em pilha para as rotas públicas e uma navegação em abas, na parte inferior para as rotas privadas. Para estilizar essa aplicação utilizaremos o NativeBase, uma biblioteca de componentes estilizados para facilitar na criação do app

📱 Figma: https://www.figma.com/file/QNxdiqBxDO8QGQTqrbxjJ5/Ignite-Gym-(Community)?node-id=37%3A6&t=NEsDgqQ26effIBqG-0

## Executar aplicação

Inicialmente é necessário clonar esse repositório para sua máquina, utilizando o seguinte comando: 

```
git clone https://github.com/pemonter/imhere.git
```

Após terminado o clone do projeto, siga os seguintes passos no terminal:
```
cd imhere
npm i
```

Dessa forma os pacotes necessários para execução do projeto serão instalados via npm.

Para proceder a execução via expo, faça o seguinte:

``` 
expo start
```

Então será apresentado um menu com as opções listadas abaixo:
```
› Metro waiting on exp://192.168.1.10:19000
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu

› Press ? │ show all commands
```

Selecione a de sua preferência e aguarde o app executar em seu emulador.

> :warning: **O ip poderá sofrer alterações de máquina para máquina, portanto é necessário verificar em qual ip seu projeto está executando, isso pode ser feito logo após executar o expo start, exemplo:  ```› Metro waiting on exp://192.168.1.10:19000```.**

> :warning: **Caso esteja diferente deste exemplo, basta acessar o seguinte caminho em seu projeto: ```src > services > api.ts```, procure por ```baseURL``` no arquivo ```api.ts```, e insira o seu endereço ip. Exemplo: ```baseURL: 'http://192.168.1.11:3333'```**

## Executar o back-end

Inicialmente é necessário clonar o repositório abaixo para sua máquina, utilizando o seguinte comando: 

```
git clone https://github.com/rodrigorgtic/ignitegym-api.git
```

Após terminado o clone do projeto, siga os seguintes passos no terminal:
```
cd ignitegum-api
npm install
```

Dessa forma os pacotes necessários para execução do projeto serão instalados via npm.

Para proceder a execução do back-end, execute o seguinte comando no terminal:

``` 
npm start
```

Pronto! Seu servidor back-end e aplicação estão rodando e prontos para uso.
