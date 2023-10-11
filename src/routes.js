import express from 'express';

const routes = express.Router();

const users = [
    {
        id: 1,
        name: 'Elias',
        email: 'consto@hotmail.com.br',
        password: '12'
    }
];

routes.get('/login', (req, res) => {
    const { email, password } = req.body;

    res.status(200).send(email)

})



routes.post('/login', (req, res) => {
    const { email, password } = req.body;

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        return res.status(200).json(foundUser);
    }

    return res.status(401).json({ message: 'Usuario sem credenciais' });
});



export default routes;
