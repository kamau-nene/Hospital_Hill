import express from 'express';
const router= express.Router()

import { createDoctorProfile, getDoctorProfile, getAllDoctorProfile, updateDoctorProfile, deleteDoctorProfile } from '../../controllers/doctor.controller';

router.post('/create/Doctor', createDoctorProfile)
router.get('/get/Doctor', getDoctorProfile)
router.get('/get/All/Doctor', getAllDoctorProfile)
router.put('/update/Doctor', updateDoctorProfile)
router.delete('/delete/Doctor', deleteDoctorProfile)

export default router;