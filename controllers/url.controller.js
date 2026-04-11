import URL from '../models/url.js';
import shortid from 'shortid';

const createNewShortURL = async (req, res) => {
    try {
        const { redirectUrl } = req.body;
        if (!redirectUrl) {
            return res.status(404).json({ message: 'URL missing' });
        }
        const shortIdValue = shortid.generate();
        await URL.create({
            shortid: shortIdValue,
            redirectUrl,
            visitHistory: []
        });
        return res.json({ shortid: shortIdValue });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const handleRedirectNewShortURL = async (req, res) => {
    try {
        const { shortid } = req.params;
        const entry = await URL.findOneAndUpdate(
            { shortid },
            { $push: { visitHistory: { timeStamp: Date.now() } } },
            { new: true }
        );
        if (!entry || !entry.redirectUrl) {
            return res.status(404).json({ message: 'Url missing' });
        }
        return res.redirect(entry.redirectUrl);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const handleAnalyticsURL = async (req, res) => {
    try {
        const { shortid } = req.params;
        const result = await URL.findOne({ shortid });
        if (!result) {
            return res.status(404).json({ message: 'url missing' });
        }
        return res.json({
            visits: result.visitHistory.length,
            analytics: result.visitHistory
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export {
    createNewShortURL,
    handleRedirectNewShortURL,
    handleAnalyticsURL
};