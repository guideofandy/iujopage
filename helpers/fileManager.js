const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, `IMG-${Date.now()}.${file.mimetype.split('/')[1]}`);
    }
});

export default storage;
