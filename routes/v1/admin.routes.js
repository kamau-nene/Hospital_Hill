import express from 'express';
const router= express.Router()

import {adminSignup, getAdminProfile, getAllAdminProfiles, updateAdminProfile, deleteAdminProfile} from '../../controllers/admin.controller.js';
import authenticateUser from '../../middlewares/auth';

router.post('/', authenticateUser, adminSignup)
router.get('/get/admin', authenticateUser, getAdminProfile)
router.get('/get/All/admins', authenticateUser, getAllAdminProfiles)
router.put('/update/admin', authenticateUser, updateAdminProfile)
router.delete('/delete/admin', authenticateUser, deleteAdminProfile)

export default router;
