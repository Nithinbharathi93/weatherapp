# weatherapp

This is a **MERN stack** weather application that fetches real-time weather data from the **OpenWeatherMap API** and stores requested weather details in **MongoDB Atlas**. The frontend is built with **Vite + React**, and the backend is powered by **Node.js, Express, and MongoDB**.

## 🛠 Tech Stack

- **Frontend**: React (Vite), Axios, TailwindCSS (Optional)
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB Atlas
- **API**: OpenWeatherMap API

---

## 🚀 Features

✅ Fetches 5-day weather forecasts based on city name  
✅ Stores weather data in MongoDB Atlas  
✅ RESTful API with Express.js  
✅ Fully responsive UI  
✅ CORS enabled for smooth API communication  

---

## 📂 Directory Structure

```
mern-weather-app/
│── backend/                # Backend (Node.js + Express + MongoDB)
│   ├── config/             # Configuration files (e.g., database connection)
│   ├── controllers/        # Controllers for handling requests
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── middleware/         # Custom middleware (e.g., auth, logging)
│   ├── utils/              # Utility functions
│   ├── server.js           # Main entry point for the backend
│   ├── .env                # Environment variables (API keys, DB URLs)
│   ├── package.json        # Backend dependencies
│── frontend/               # Frontend (React)
│   ├── public/             # Static assets (index.html, icons, etc.)
│   ├── src/                # Source files
│   │   ├── components/     # Reusable components (e.g., WeatherCard, SearchBox)
│   │   ├── pages/          # Page components (e.g., Home.js)
│   │   ├── services/       # API calls (e.g., OpenWeather API integration)
│   │   ├── styles/         # CSS or styled-components
│   │   ├── App.js          # Root component
│   │   ├── index.js        # React entry point
│   ├── .env                # Frontend environment variables (e.g., API keys)
│   ├── package.json        # Frontend dependencies
│── .gitignore              # Ignore files for Git
│── README.md               # Project documentation

```

---

## 🏗 Installation & Setup

### 🔧 Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file:
   ```sh
   API_KEY=your_openweathermap_api_key
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=your_fav_port
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### 🎨 Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd weatherapp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm run dev
   ```

---

## 🌍 API Endpoints

| Method | Endpoint         | Description                          |
|--------|----------------|----------------------------------|
| `GET`  | `/forecast?city=London` | Fetch weather forecast by city |

---

## 🖼 UI Preview

![Weather App UI](https://via.placeholder.com/800x400)

---

## 📌 Future Enhancements

🔹 Add user authentication (JWT-based)  
🔹 Allow users to save favorite cities  
🔹 Implement charts for weather trends  
🔹 Deploy on Vercel (Frontend) & Render (Backend)  

---

## 🎯 Contributing
Feel free to fork this repo and submit PRs to enhance the project!

---

## 📜 License
This project is open-source and available under the MIT License.

---

### 🚀 Made with ❤️ by Nithinbharathi.T

