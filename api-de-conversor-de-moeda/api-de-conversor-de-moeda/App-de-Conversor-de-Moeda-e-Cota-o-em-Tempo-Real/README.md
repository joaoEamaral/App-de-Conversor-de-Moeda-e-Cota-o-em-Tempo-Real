# App-de-Conversor-de-Moeda-e-Cota-o-em-Tempo-Real
Aplicativo que tem como função converter Real em Dólar ou em Euro.

-----------------------------------------------------------------------------------------------------------------------

Programadores: João Emanuel Lozano Bergamin & Pedro Henrique dos Santos Amaral 

Curso: 3 - MTEC PI Desenvolvimento de Sistemas

Escola: Etec Euro Albino de Souza 

-----------------------------------------------------------------------------------------------------------------------

Instruções para Rodar o Projeto Requisitos:

Node.js (recomendado: versão LTS).

Expo CLI.

Acesso à internet para obtenção das taxas de câmbio.

Passo a Passo:

Clone o repositório do projeto:

git clone https://github.com/Pepe-Dan-Dan/Leprechaun---Conversor-de-Moedas.git

Acesse o diretório do projeto:
cd conversor-de-
Instale as dependências necessárias:

npm install

Inicie o aplicativo com o Expo:

expo start
Use o aplicativo no seu dispositivo físico ou emulador, escaneando o QR code exibido no terminal ou navegador.

-----------------------------------------------------------------------------------------------------------------------

Tela De Cadastro de Usuário: 

![Cadastro](https://github.com/user-attachments/assets/1181c9c7-54fa-4aad-8ea8-e73afaa68d56)     ![Cadastro2](https://github.com/user-attachments/assets/70664cf9-80f6-4e88-9509-9715f32555f5)


 
O usuário vê uma tela com um formulário no meio, onde ele pode digitar seu nome de usuário, e-mail e a senha ou caso ele já possua um conta um botão para o qual ele será redirecionado para a tela de login.

O usuário é solicitado a digitar:

•	O Nome de Usuário.

•	O Email.

•	 E uma senha.

Verificação de dados: Depois do usuário preencher todos os campos e clicar no botão “Cadastrar” o sistema irá verificar se algum erro de preenchimento como por exemplo a falta de um “@gmail.com” no campo email ou verificar se o campo senha tem 8 caracteres no mínimo, caso ele identifique algum erro ele irá informar uma mensagem para o usuário corrigir, por outro lado se tudo estiver certo ele irá ser redirecionado para a tela de login.


-----------------------------------------------------------------------------------------------------------------------

Tela de Login:

![Login](https://github.com/user-attachments/assets/52633573-f0a6-4a6b-9c47-bdd77b7a4c2e) ![Login2](https://github.com/user-attachments/assets/09c8eb3d-bf99-4678-8a94-e1c3803788bc)



 
O usuário vê uma tela com um formulário no meio, onde ele pode digitar seu nome de usuário ou e-mail e a senha.
Campos para preencher: O usuário é solicitado a digitar:

•	O nome de usuário ou e-mail que usou para se cadastrar no aplicativo.

•	A senha que ele criou para acessar a conta.

Verificação de dados: Quando o usuário preenche os campos e clica no botão de "Entrar", o aplicativo verifica se o nome de usuário (ou e-mail) e a senha que ele digitou correspondem aos dados armazenados no dispositivo. Esses dados foram salvos na primeira vez que o usuário fez login ou se registrou.

Resposta do sistema:

•	Se as informações estiverem corretas, o aplicativo avisa o usuário com uma mensagem de boas-vindas e o leva para a tela principal do app.

•	Se as informações estiverem erradas, o aplicativo não irá efetuar o login, com isso impossibilitando o usuário de acessar o resto do aplicativo. 


-----------------------------------------------------------------------------------------------------------------------

Tela de Conversão: 

![Conversor](https://github.com/user-attachments/assets/1f025d20-99b4-4c96-895e-e547e703af9d)

 
O usuário vê uma tela com uma mensagem de boas-vindas e logo abaixo um campo de preenchimento e uma tabela.

Ações na página: O usuário poderá colocar o valor que desejar em reais para poder ter uma visualização do mesmo valor digitados anteriormente só que convertido em Dólar e Euro. 

-----------------------------------------------------------------------------------------------------------------------

Versões Utilizadas:

React Native: 0.72.0 

Expo: 49.0.5 

API de cotações: AwesomeAPI
https://docs.awesomeapi.com.br/api-de-moedas
