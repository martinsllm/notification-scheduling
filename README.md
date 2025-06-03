
# Notification Scheduling

O objetivo foi desenvolver uma plataforma de agendamento de notificações, onde é possível cadastrar, consultar o status atual e cancelar um agendamento.


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/martinsllm/notification-scheduling
```

Entre no diretório do projeto

```bash
  cd notification-scheduling
```

Instale as dependências

```bash
  yarn
```

Rode o container

```bash
  docker-compose up --build
```

Rode a migration para gerar as tabelas do banco

```bash
  yarn db:migrate
```

Inicie o servidor

```bash
  yarn dev
```


## Documentação da API


#### Cria um novo agendamento de notificação

```http
  POST /notification/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item |
| `recipientEmail`      | `string` | **Obrigatório**. O e-mail do destinatário |
| `recipientPhone`      | `string` | **Obrigatório**. O telefone do destinatário |
| `date`      | `string` | **Obrigatório**. Data de envio da notificação |
| `hour`      | `string` | **Obrigatório**. Horário de envio da noticação |
| `message`      | `string` | **Obrigatório**. Mensagem que será enviada |

#### Consulta o status de um agendamento

```http
  GET /notification/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do agendamento que você quer consultar |

#### Cancela um agendamento

```http
  DELETE /notification/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do agendamento que você quer cancelar |
