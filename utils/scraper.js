const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

// Function to extract images from a webpage
async function extractImages(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const content = await page.content();
    const $ = cheerio.load(content);
    const images = [];
    $('img').each((index, img) => {
        images.push($(img).attr('src'));
    });
    await browser.close();
    return images;
}

// Function to extract links from a webpage
async function extractLinks(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const content = await page.content();
    const $ = cheerio.load(content);
    const links = [];
    $('a').each((index, link) => {
        links.push($(link).attr('href'));
    });
    await browser.close();
    return links;
}

// Function to extract text from a webpage
async function extractText(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const content = await page.content();
    const $ = cheerio.load(content);
    const text = $('body').text();
    await browser.close();
    return text;
}

// Function to extract elements by selector
async function extractBySelector(url, selector) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const content = await page.content();
    const $ = cheerio.load(content);
    const elements = [];
    $(selector).each((index, element) => {
        elements.push($(element).text());
    });
    await browser.close();
    return elements;
}

module.exports = { extractImages, extractLinks, extractText, extractBySelector };