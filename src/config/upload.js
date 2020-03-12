const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, callback) => {
            const ext = path.extname(file.originalname); // pegando a extenção do arquivo
            const name = path.basename(file.originalname, ext); // pegando o nome base sem extenção

            callback(null, `${name}-${Date.now()}${ext}`);
        }
    })
};