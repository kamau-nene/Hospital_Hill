import express from 'express';
const router= express.Router();

import { createPatientProfile, getPatientProfile, getAllPatientProfiles, updatePatientProfile, deletePatientProfile } from '../../controllers/patient.controller';
import authenticateUser from '../../middlewares/auth';

router.post('/create/patient', authenticateUser, createPatientProfile)
router.get('/get/patient', authenticateUser, getPatientProfile)
router.get('/get/All/patient', authenticateUser, getAllPatientProfiles)
router.put('/update/patient', authenticateUser, updatePatientProfile)
router.delete('/delete/patient', authenticateUser, deletePatientProfile)

export default router;

