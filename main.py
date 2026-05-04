import requests
from bs4 import BeautifulSoup

# A function to scrape a website

def scrape_website(url):
    # Send a GET request to the website
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the content of the page with BeautifulSoup
        soup = BeautifulSoup(response.content, 'html.parser')
        return soup
    else:
        print(f'Failed to retrieve the website. Status code: {response.status_code}')
        return None

# Example usage
if __name__ == '__main__':
    url = 'https://example.com'
    scraped_data = scrape_website(url)
    if scraped_data:
        print(scraped_data.prettify())