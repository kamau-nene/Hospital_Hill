import express from 'express';
const router= express.Router()

import {createNewShortURL, handleRedirectNewShortURL, handleAnalyticsURL}from '../controllers/url.js';

router.post('/', createNewShortURL),
router.get('/get/:shortid', handleRedirectNewShortURL),
router.get('/get/analytics/:shortid', handleAnalyticsURL)

export default router;

