# Configuration settings for web scraper

WEB_SCRAPER_URL = 'https://donkye.com'
WEB_SCRAPER_INTERVAL = 60  # in seconds
WEB_SCRAPER_USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'

# Scraping settings
OUTPUT_FORMAT = ['json', 'csv']  # Save to JSON and CSV
DATABASE_ENABLED = False  # Set to True if you want to use a database