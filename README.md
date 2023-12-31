# Issue with Hosting on Render
Please note that if you choose to host this application on Render, you may encounter an issue with the scheduled data retrieval and logging functionality. Render's hosting service has certain limitations and behavior that affect background tasks and scheduled jobs.

The issue arises from Render's sleep mode feature, which may cause the scheduled task to stop running when the site is inactive. As a result, the data will not be logged unless the site is visited manually.

To ensure consistent data logging, you have a few options:

Check Render's documentation: Refer to Render's official documentation or contact their support team to understand their specific limitations and recommended practices for running scheduled tasks or background processes.

Explore alternative hosting services: Consider using a different hosting service that better supports your requirements, such as those that allow background tasks or provide features for scheduling jobs.

External cron service: Implement an external cron service, such as cron-job.org or AWS CloudWatch Events, to trigger your API request and data logging at the desired interval. This will ensure that your task is executed consistently, regardless of Render's sleep mode or restrictions.

By providing this information, you can give potential users of your API a heads-up about the issue with Render and offer alternative solutions to ensure smooth data retrieval and logging.
# Nasa-Quotes-API

This is the README for the Nasa-Quotes-API project.

## Project Description

Nasa-Quotes-API is an API server that makes daily API calls to retrieve data from NASA and quote APIs. The retrieved data is stored in a database, and the project provides API endpoints to access and retrieve the saved data. The purpose of this project is to overcome API call limits imposed by external APIs and provide a consolidated API for users to retrieve NASA and quote data.

## Installation

To install and set up the project on your local machine, follow these steps:

1. Clone the project repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd nasa-quotes-api`
3. Install the dependencies: `npm install`
4. Set up the environment variables:
   - Create a `.env` file in the project root directory.
   - Add the following variables to the `.env` file:
     ```
     MONGODB_URI=<mongodb_connection_string>
     QUOTE_API_KEY=<your_theysaidsoquotes_api_key>
     NASA_API_KEY=<your_nasa_api_key>
     ```
     Replace `<mongodb_connection_string>` with your MongoDB connection string
     Replace `<your_theysaidsoquotes_api_key>` and `<your_nasa_api_key>` API keys with your personal API keys from TheySaidSo Quotes API and NASA API
5. Start the server: `npm start`

## Usage

Users can interact with the API by making HTTP requests to the provided endpoints. Below are the available endpoints and their descriptions:

- `GET api/custom/now`: Retrieves both NASA and quote data for the current day.
- `GET api/nasa`: Retrieves the last 10 entries of NASA data.
- `GET api/nasa/id/:id`: Retrieves a specific NASA data entry by ID.
- `GET api/nasa/date/:date`: Retrieves a specific NASA data entry by date.
- `GET api/quotes`: Retrieves the last 10 entries of quote data.
- `GET api/quotes/id/:id`: Retrieves a specific quote data entry by ID.
- `GET api/quotes/author/:author`: Retrieves quote data by a specific author.
- `GET api/quotes/date/:date`: Retrieves quote data by a specific date.

To retrieve both NASA and quote data for the current day, users can make a `GET` request to `/custom/now`. For specific queries, users can make requests to the corresponding endpoints, providing the required parameters.

- [Live Site Test for Custom Route](https://nasa-quotes-api.onrender.com/api/custom/now)


## Configuration

The project requires the following environment variables to be set in the `.env` file:

- `MONGODB_URI`: The connection string for the MongoDB database.
- `QUOTE_API_KEY`: Your API KEY from THEYSAIDSO API.
- `NASA_API_KEY`: Your API KEY from NASA API.

Make sure to set these variables correctly before running the server.

## Dependencies

The project relies on the following external libraries and packages:

- Express: Web framework for building the API server.
- Mongoose: MongoDB object data modeling (ODM) library for database operations.
- Axios: HTTP client for making API calls to external APIs.
- Dotenv: Library for loading environment variables from a `.env` file.

All the required dependencies are listed in the `package.json` file.

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code according to the terms of the license.


## Response Format

The API returns responses in JSON format. The structure of the returned data depends on the endpoint:

Example response for `GET /api/custom/now`:

```json
{
"nasa": {
"_id": "649f9ab2a03fe7ab47480bb3",
"date": "2023-06-30",
"explanation": "Are asteroids dangerous? Some are, but the likelihood of a dangerous asteroid striking the Earth during any given year is low. Because some past mass extinction events have been linked to asteroid impacts, however, humanity has made it a priority to find and catalog those asteroids that may one day affect life on Earth. Pictured here are the orbits of the over 1,000 known Potentially Hazardous Asteroids (PHAs). These documented tumbling boulders of rock and ice are over 140 meters across and will pass within 7.5 million kilometers of Earth -- about 20 times the distance to the Moon. Although none of them will strike the Earth in the next 100 years -- not all PHAs have been discovered, and past 100 years, many orbits become hard to predict. Were an asteroid of this size to impact the Earth, it could raise dangerous tsunamis, for example. To investigate Earth-saving strategies, NASA successfully tested the Double Asteroid Redirection Test (DART) mission last year. Of course, rocks and ice bits of much smaller size strike the Earth every day, usually pose no danger, and sometimes create memorable fireball and meteor displays.    Today is: Asteroid Day",
"hdurl": "https://apod.nasa.gov/apod/image/2306/phas_jpl_3254.jpg",
"media_type": "image",
"service_version": "v1",
"title": "Orbits of Potentially Hazardous Asteroids",
"url": "https://apod.nasa.gov/apod/image/2306/phas_jpl_960.jpg",
"createdAt": "2023-07-01T03:17:06.958Z",
"updatedAt": "2023-07-01T03:17:06.958Z",
"__v": 0
},
"quote": {
"_id": "649f9ab3a03fe7ab47480bb5",
"quote": "I know for sure that what we dwell on is who we become.",
"length": 55,
"author": "Oprah Winfrey",
"language": "en",
"tags": [
"inspire",
"motivational"
],
"permalink": "https://theysaidso.com/quote/oprah-winfrey-i-know-for-sure-that-what-we-dwell-on-is-who-we-become",
"title": "Inspiring Quote of the day",
"category": "inspire",
"background": "https://theysaidso.com/assets/images/qod/qod-inspire.jpg",
"date": "2023-07-01",
"createdAt": "2023-07-01T03:17:07.521Z",
"updatedAt": "2023-07-01T03:17:07.521Z",
"__v": 0
}
}
```



Example response for `GET /api/nasa`:

```json
[
{
"_id": "649f9ab2a03fe7ab47480bb3",
"date": "2023-06-30",
"explanation": "Are asteroids dangerous? Some are, but the likelihood of a dangerous asteroid striking the Earth during any given year is low. Because some past mass extinction events have been linked to asteroid impacts, however, humanity has made it a priority to find and catalog those asteroids that may one day affect life on Earth. Pictured here are the orbits of the over 1,000 known Potentially Hazardous Asteroids (PHAs). These documented tumbling boulders of rock and ice are over 140 meters across and will pass within 7.5 million kilometers of Earth -- about 20 times the distance to the Moon. Although none of them will strike the Earth in the next 100 years -- not all PHAs have been discovered, and past 100 years, many orbits become hard to predict. Were an asteroid of this size to impact the Earth, it could raise dangerous tsunamis, for example. To investigate Earth-saving strategies, NASA successfully tested the Double Asteroid Redirection Test (DART) mission last year. Of course, rocks and ice bits of much smaller size strike the Earth every day, usually pose no danger, and sometimes create memorable fireball and meteor displays.    Today is: Asteroid Day",
"hdurl": "https://apod.nasa.gov/apod/image/2306/phas_jpl_3254.jpg",
"media_type": "image",
"service_version": "v1",
"title": "Orbits of Potentially Hazardous Asteroids",
"url": "https://apod.nasa.gov/apod/image/2306/phas_jpl_960.jpg",
"createdAt": "2023-07-01T03:17:06.958Z",
"updatedAt": "2023-07-01T03:17:06.958Z",
"__v": 0
}
]
```

Example response for `GET /api/quotes`:

```json
[
{
"_id": "649f9ab3a03fe7ab47480bb5",
"quote": "I know for sure that what we dwell on is who we become.",
"length": 55,
"author": "Oprah Winfrey",
"language": "en",
"tags": [
"inspire",
"motivational"
],
"permalink": "https://theysaidso.com/quote/oprah-winfrey-i-know-for-sure-that-what-we-dwell-on-is-who-we-become",
"title": "Inspiring Quote of the day",
"category": "inspire",
"background": "https://theysaidso.com/assets/images/qod/qod-inspire.jpg",
"date": "2023-07-01",
"createdAt": "2023-07-01T03:17:07.521Z",
"updatedAt": "2023-07-01T03:17:07.521Z",
"__v": 0
}
]
```

## Error Handling

If an error occurs, the API will return an appropriate HTTP status code and an error message in the response body.

## Attribution

Note: If you are using our public API or quotes from our website, an attribution link back to theysaidso.com is required. If you don't want to display attribution, please sign up for the private API. Here is the code you can cut and paste to provide attribution:

```html
<span style="z-index:50;font-size:0.9em; font-weight: bold;">
  <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/>
  <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style="color: #ccc; margin-left: 4px; vertical-align: middle;">
    They Said So®
  </a>
</span>
```
## Attribution

If you are using our public API or quotes from our website, please include the following attribution link back to theysaidso.com:

Powered by quotes from [theysaidso.com](https://theysaidso.com)


