# Web Scraper Project

## Project Description
This is a web scraper project that allows users to scrape data from various web pages and APIs. The application can be configured to target specific sites and extract relevant information based on user-defined parameters.

## Installation Instructions
1. Clone this repository:
   ```bash
   git clone https://github.com/danlucasek/web-scraper.git
   cd web-scraper
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## API Endpoint Documentation
### POST /api/scrape
- **Description**: Initiates the scraping process for a given URL.
- **Request Body**: 
  ```json
  {
    "url": "http://example.com"
  }
  ```
- **Response**:
  - Success: returns the scraped data.
  - Error: returns an error message.

## Usage Examples
### cURL Command
To initiate a scrape using cURL:
```bash
curl -X POST http://localhost:3000/api/scrape -H "Content-Type: application/json" -d '{"url":"http://example.com"}'
```

### Node.js Example
To initiate a scrape using Node.js:
```javascript
const axios = require('axios');

async function scrapeData() {
    try {
        const response = await axios.post('http://localhost:3000/api/scrape', {
            url: 'http://example.com'
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

scrapeData();
```

## Response Format Examples
- **Success Response**:
  ```json
  {
    "status": "success",
    "data": {
      "title": "Example Page",
      "content": "This is an example content."
    }
  }
  ```
- **Error Response**:
  ```json
  {
    "status": "error",
    "message": "Invalid URL"
  }
  ```

## Contributing Guidelines
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.
