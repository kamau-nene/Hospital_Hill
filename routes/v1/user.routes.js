import User from '../../models/user.js';
const router= express.Router();

import {createUserProfile, getUserProfile, getAllUserProfile, updateUserProfile, deleteUserProfile} from '../../controllers/user.controller.js';
import authenticateUser from '../../middlewares/auth.js';

router.post('/create/user', authenticateUser, createUserProfile)
router.get('/get/user', authenticateUser, getUserProfile)
router.get('/get/All/user', authenticateUser, getAllUserProfile)
router.update('/update/user', authenticateUser, updateUserProfile)
router.delete('/delete/user', authenticateUser, deleteUserProfile)

export default router;
