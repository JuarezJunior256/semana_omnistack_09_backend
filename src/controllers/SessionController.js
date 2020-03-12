const User = require('../models/User');
module.exports = {
   async store(req, res) {
        const { email } = req.body;

        // buscar no Schema de usuário
        let user = await User.findOne({email});
        // caso não encontre o email cadastrado, ele cria um novo usuário
        if (!user) {
            const user = await User.create({ email });
        }
        
        return res.json(user);
    }
};