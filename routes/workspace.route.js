const express = require('express');
const {
  createWorkspace,
  createFolder,
  updateWorkspace,
  getAllWorkspace,
  deleteWorkspace,
  inviteMember,
} = require('../controllers/workspace.controller');

const upload = require('../middlewares/multer.middleware');
const auth = require('../middlewares/auth.middleware');

const role = process.env;

const router = express.Router();

router.post('/create', auth(role.USER), createWorkspace);
router.post('/:workspace/folder', auth(role.ADMIN), createFolder);
router.post('/:workspace/invite', auth(role.ADMIN), inviteMember);
router.put('/update/:workspace', auth(role.ADMIN), upload('image'), updateWorkspace);
router.get('/all', auth(role.ADMIN), getAllWorkspace);
<<<<<<< HEAD
router.delete('/delete/:workspace', auth(role.ADMIN), deleteWorkspace);
=======
router.delete('/:workspace', auth(role.ADMIN), deleteWorkspace);
>>>>>>> 0959df34f778eec37ca2ae7bdc77eee10b68e775

module.exports = router;
