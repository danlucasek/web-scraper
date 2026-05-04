const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const router = express.Router();

/**
 * @route   POST /api/scrape
 * @desc    Scrape data from the given URL
 * @param   {string} url - The URL to scrape
 * @param   {string} [selector] - Optional CSS selector to filter the data
 * @returns {JSON} Extracted data including images, links, and text
 */
router.post('/scrape', async (req, res) => {
    const { url, selector } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        let result = {
            images: [],
            links: [],
            text: [],
        };

        if (selector) {
            $(selector).each((i, elem) => {
                const element = $(elem);
                result.text.push(element.text());
                result.images.push(element.find('img').attr('src'));
                element.find('a').each((j, link) => {
                    result.links.push($(link).attr('href'));
                });
            });
        } else {
            $('img').each((i, elem) => {
                result.images.push($(elem).attr('src'));
            });
            $('a').each((i, elem) => {
                result.links.push($(elem).attr('href'));
            });
            $('body').each((i, elem) => {
                result.text.push($(elem).text());
            });
        }

        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while scraping the data' });
    }
});

module.exports = router;