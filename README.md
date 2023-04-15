//TODO
- healcheck
- implementar swagger
- colocar o path do banco em um env

# NestJS API usando MongoDB e Docker.

## Descrição:


## Criando base MongoDB

O banco de dados usado foi o MongoDB, foi criado no Atlas, uma nuvem propria do mongo.

cloud.mongodb.com

Entrar no site, criar um cluster e colocar a compassTag no app.module

## Docker:
### Criar imagem local
Para criar a imagem local, você deve executar o comando abaixo:

```shell 
docker build -t nomeDaImagem .
 ```

### Execução local com docker ou docker-compose

Com a imagem criada, podemos executar usando o Docker via CLI:

```shell 
docker run -p portaDoHost:3000 nomeDaImagem
 ```

 Ou, usando o docker-compose, para isso, deve haver um arquivo chamado docker-compose.yaml com as configurações

```shell 
docker compose up
 ```

# Deploy no Beanstalk

## Criar tag de imagem para envio ao Dockerhub
Para criar a tag para isso, devemos primeiro fazer o login no DockerHub

```shell 
docker login
 ```

Depois, precisamos da imageId

```shell 
docker images
 ```

Após isso, rodamos o comando

```shell 
docker tag seuImageId seuNomeUsuario/nomeDaImagem
 ```

 E subimos para o dockerHub

 ```shell 
docker push seuNomeUsuario/nomeDaImagem
 ```

