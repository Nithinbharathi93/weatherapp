import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema(
    {
        city: String,
        country: String,
        temperature: Number,
        weather: String,
        timestamp: { type: Date, default: Date.now }
    },
    { collection: "weatherdata" }
);

const Weather = mongoose.model("Weather", weatherSchema);
export default Weather;
