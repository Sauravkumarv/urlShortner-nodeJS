# URL Shortener Node.js

A full-stack URL Shortener application built using Node.js, Express.js, MongoDB, and Mongoose. The app allows users to generate short and unique URLs for long original URLs, similar to services like Bitly. It also tracks each visit with a timestamp and provides basic analytics such as total clicks and visit history.

## Features

- Generate short and unique URLs for any long URL
- Redirect users from the short URL to the original long URL
- Track each visit to a short URL with a timestamp
- Analytics endpoint to get total clicks and visit history for each short URL
- REST API built using Express.js
- Data storage with MongoDB and Mongoose

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sauravkumarv/urlShortner-nodeJS.git
   cd urlShortner-nodeJS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start MongoDB:**
   Make sure your MongoDB server is running locally on `mongodb://localhost:27017/short-url`. You can change the connection string in `index.js` if you have a different setup.

4. **Start the application:**
   ```bash
   node index.js
   ```
   The server will start on port `8001`.

## Usage

### Generate a Short URL

- **Endpoint:** `POST /url`
- **Body:** JSON `{ "url": "https://example.com/your-long-url" }`
- **Response:** `{ "id": "abc12345" }` (where `abc12345` is your generated short ID)

### Redirect to Original URL

- **Endpoint:** `GET /:shortId`
- **Behavior:** Redirects to the original URL associated with the `shortId` and records the visit.

### Get Analytics for a Short URL

- **Endpoint:** `GET /url/analytics/:shortId`
- **Response:**
  ```json
  {
    "totalCLicks": 10,
    "analytics": [
      { "timestamp": 1720080000000 },
      ...
    ]
  }
  ```

## Project Structure

- `index.js`: Main server entry point and route setup
- `routes/url.js`: Express routes for URL generation and analytics
- `controllers/url.js`: Controller logic for handling URLs and analytics
- `models/url.js`: Mongoose schema and model for URL storage
- `connect.js`: MongoDB connection logic

## Example

1. **Create Short URL:**
   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"url":"https://google.com"}' http://localhost:8001/url
   ```
   Response: `{ "id": "abc12345" }`

2. **Use Short URL:**
   Open `http://localhost:8001/abc12345` in your browser. You will be redirected to `https://google.com`.

3. **Get Analytics:**
   ```bash
   curl http://localhost:8001/url/analytics/abc12345
   ```

## License

This project is for learning purposes. No license specified.

---

**Author:** [Sauravkumarv](https://github.com/Sauravkumarv)
