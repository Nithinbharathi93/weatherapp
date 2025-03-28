    import express from 'express';
    import dotenv from 'dotenv';
    import cors from 'cors';
    import axios, { getAdapter } from 'axios';
    import mongoose from 'mongoose';
    import connectionDB from './config/connectionDB.js';
    import Weather from './models/weatherModel.js';

    dotenv.config();

    connectionDB();

    const app = express();
    const PORT = process.env.PORT || 5000;

    app.use(cors());
    app.use(express.json());

    app.get("/forecast", async (req, res) => {
        try {

            const { city } = req.query;
            const apikey = process.env.API_KEY;

            if(!city) {
                return res.statusCode(400).json({msg:'City name required..!'});
            }

            const getLatLon = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`;
            const geoResp = await axios.get(getLatLon);

            if(!geoResp.data.length) {
                return res.status(404).json({msg:'City nnot found'});
            }

            const { lat, lon, country } = geoResp.data[0];

            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

            const response = await axios.get(url);

            // Creating a weather data
            const weatherdata = {
                city: city, 
                country: country, 
                temperature: response.data.list[0].main.temp,
                weather: response.data.list[0].weather[0].description
            };

            const saveWeather = new Weather(weatherdata);
            await saveWeather.save();
            res.json(response.data);  // Fix: use response.data

        } catch (err) {
            console.error("Error fetching forecast:", err);
            res.status(500).json({ msg: "No response found..!" });
        }
    });

    app.listen(PORT, () => console.log(`server listining to http://localhost:${PORT}`));