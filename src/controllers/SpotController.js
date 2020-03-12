const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    // listando os spots
    async index(req, res) {
        const { tecnologia } = req.query;

        const spots = await Spot.find({tecnologias: tecnologia});

        return res.json(spots)
    },

    // criando os spots
    async store(req, res) {
        const { filename } = req.file;
        const { empresa, tecnologias, preco } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({error: "Usuário não existe"});
        } 

        // criando o spot
        const spot = await Spot.create({
            usuario: user_id,
            thumbnail: filename,
            tecnologias: tecnologias.split(',').map(tech => tech.trim()),
            preco: preco,
            empresa: empresa
        });

        return res.json(spot);
    }
};