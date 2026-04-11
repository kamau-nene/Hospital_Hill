import Url from '../models/url.js';

// Create a new short URL
const createShortUrl = async (shortid, redirectUrl) => {
    return await Url.create({
        shortid,
        redirectUrl,
        visitHistory: []
    });
};

// Find a URL by shortid
const getUrlByShortId = async (shortid) => {
    return await Url.findOne({ shortid });
};

// Update visit history for a short URL
const addVisitToHistory = async (shortid) => {
    return await Url.findOneAndUpdate(
        { shortid },
        { $push: { visitHistory: { timeStamp: Date.now() } } },
        { new: true }
    );
};

// Get analytics for a short URL
const getAnalytics = async (shortid) => {
    const url = await Url.findOne({ shortid });
    if (!url) return null;
    return {
        visits: url.visitHistory.length,
        analytics: url.visitHistory
    };
};

export {
    createShortUrl,
    getUrlByShortId,
    addVisitToHistory,
    getAnalytics
};