const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads');
//   },
//   filename: (req, file, cb) => {
//     const fileExt = file.originalname.split('.').pop();
//     const filename = `${new Date().getTime()}.${fileExt}`;

//     cb(null, filename);
//   },
// });

const upload = multer({ dest: 'uploads/' });

module.exports = upload;
