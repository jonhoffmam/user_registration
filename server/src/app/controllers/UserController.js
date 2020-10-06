import passwordGenerator from 'password-generator';
import Mail from '../lib/Mail';

const store = async (req, res) => {
	const {name, email} = req.body;

	const user = {
		name, 
		email, 
		password: passwordGenerator(15, false)
	};

	await Mail.sendMail({
		from: 'Jon Hoffmam <jon.hoffmam@yahoo.com.br>',
		to: `${name} <${email}>`,
		subject: 'Cadastro de usuário',
		html: `Olá ${name}, bem-vindo a DIO`
	})

	return res.json(user);
}

export default store;