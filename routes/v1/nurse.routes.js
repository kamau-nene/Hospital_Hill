import express from 'express';
const router= express.Router()

import {createNurseProfile, getNurseProfile, getAllNurseProfiles, updateNurseProfile, deleteNurseProfile} from '../contollers/nurse.js';
import { errorHandler } from '../../middlewares/errorHandler.js';

router.post('/create/nurse', errorHandler, createNurseProfile)
router.get('/get/nurse', errorHandler, getNurseProfile)
router.get('/get/All/nurses', errorHandler, getAllNurseProfiles)
router.put('/update/nurse', errorHandler, updateNurseProfile)
router.delete('/delete/nurse', errorHandler, deleteNurseProfile)


export default router;


