# API-Maps

API que faz um get da localização de acordo com cep informado na api google maps

API de Coordenadas com Express
Este é um exemplo básico de uma API em Node.js utilizando o framework Express para obter coordenadas geográficas (latitude e longitude) a partir de um CEP. A API faz uma requisição à API do Google Maps Geocoding para obter essas coordenadas.

Pré-requisitos
Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina. Além disso, é necessário uma chave de API do Google Maps para acessar o serviço de geocodificação.

Instalação
Clone o repositório:

bash
Copy code
git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências:

bash
Copy code
cd seu-repositorio
npm install
Configure a chave de API do Google Maps:

Abra o arquivo server.ts.
Substitua "AIzaSyAaRG_Q93Makyp9Dt_n_r_fyYGd3g91yIo" pela sua chave de API no trecho key: "Sua-Chave-Aqui".
Uso
Para iniciar a API, execute o seguinte comando:

bash
Copy code
npm start
O servidor estará ativo em http://localhost:3000. Agora, você pode fazer uma solicitação GET para obter coordenadas geográficas para um CEP específico.

Exemplo de solicitação:

http
Copy code
GET http://localhost:3000/api/get-coordinates/SEU_CEP
Substitua SEU_CEP pelo CEP desejado.

Respostas da API
Se as coordenadas forem encontradas para o CEP fornecido, a API retornará um JSON contendo as coordenadas:

json
Copy code
{
"lat": -23.4567,
"lng": -46.7890
}
Se as coordenadas não forem encontradas, a API retornará um JSON com uma mensagem de erro e o status HTTP 404:

json
Copy code
{
"error": "Coordenadas não encontradas para o CEP fornecido."
}
Em caso de erro interno, a API retornará um JSON com uma mensagem de erro e o status HTTP 500:

json
Copy code
{
"error": "Erro interno ao processar a solicitação."
}
