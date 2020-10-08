# User Registration

## About

User registration and sending confirmation email.
This project addresses the concept of process queue in sending confirmation emails used as an example.

### 🔨 Technology

#### Back-end

##### ⚙️Server ([NodeJS](https://nodejs.org/))

- [**Bull**](https://github.com/OptimalBits/bull)
- [**BullBoard**](https://github.com/vcapretz/bull-board)
- [**Dotenv**](https://github.com/motdotla/dotenv)
- [**Express**](https://github.com/expressjs/express)
- [**Password-Generator**](https://github.com/bermi/password-generator)
- [**Redis**](https://redis.io/)

### How to use❔

- Create account in [**mailtrap.io**](https://mailtrap.io/) and add new **`Inbox`** or use the exist
- In **`Integrations`** select **`Nodemailer`** and copy, e.g.:

```sh
host: "smtp.mailtrap.io",
port: 2525,
auth: {
  user: "xxxxxxxxxxxxxx",
  pass: "xxxxxxxxxxxxxx"
}
```

- Create **`.env`** or rename **`.env.example`** file in server folder this project, and insert the information copy in this format and keep remaining:

```sh
PORT=8080

MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=xxxxxxxxxxxxxx
MAIL_PASS=xxxxxxxxxxxxxx

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

- And now run **`server.js`** and **`queue.js`**:

```sh
> npm start && npm run queue
```
