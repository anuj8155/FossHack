# 🎥 OmniCast - One Broadcast, Infinite Reach

## 🌟 Overview

**OmniCast** is a powerful live streaming platform that allows users to broadcast their content to multiple platforms **(YouTube, Instagram, etc.) simultaneously**. Leveraging **RTMP, FFmpeg, Node.js, Express, Socket.io, and Docker**, OmniCast provides seamless media streaming and real-time communication. Designed for broadcasters, content creators, and businesses, OmniCast enables high-quality streaming with an intuitive and scalable architecture.

## 🚀 Features

- 📡 **Multi-Platform Streaming** - Go live on **YouTube, Instagram, and more** at the same time.
- 🎥 **FFmpeg Integration** - Handles media processing efficiently.
- 🔄 **Socket.io for Real-Time Chat** - Enables live interaction with viewers.
- 🐳 **Docker-Based Deployment** - Ensures easy setup with Ubuntu-based containers.
- 🔐 **User Authentication** - Secure login and session management.
- ⚡ **Low Latency Streaming** - Ensures smooth, real-time broadcasting.
- 📊 **Scalable Infrastructure** - Built to handle high traffic loads.
- 🌍 **Cloud Storage** - Uses **Cloudinary** for media hosting and management.

## 💡 Idea Behind OmniCast

The goal of OmniCast is to **simplify live streaming** for businesses, educators, and independent content creators. By integrating RTMP, WebSockets, and a robust backend, OmniCast ensures **seamless, low-latency broadcasting** without complex configurations. The ability to **stream to multiple platforms simultaneously** makes it a game-changer for content creators looking to expand their reach.

## 🎯 Target Audience

- 🎙 **Content Creators** - Streamers, YouTubers, and Influencers.
- 🏫 **Educators** - Online courses, webinars, and virtual classrooms.
- 🏢 **Businesses** - Live product launches, corporate meetings.
- 🎮 **Gamers** - Game streaming with real-time audience interaction.

## 🛠️ Tech Stack

- **Frontend:** React.js (Client-side UI)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Media Processing:** FFmpeg
- **Streaming Protocol:** RTMP
- **Real-time Communication:** Socket.io
- **Containerization:** Docker (Ubuntu-based images)
- **Cloud Storage:** Cloudinary
- **3D Graphics & UI Enhancements:** Three.js

## 📌 Prerequisites

Make sure you have the following installed:

- Node.js (>=14.x.x)
- npm or yarn
- Docker (if deploying with containers)
- FFmpeg (for media processing)
- MongoDB (for user and stream data storage)

## 🔧 Installation

### Step 1: Clone the Repository
```sh
git clone https://github.com/anuj8155/FossHack.git
```

### Step 2: Navigate to the Project Directory
```sh
cd OmniCast
```

### Step 3: Install Dependencies
```sh
npm install  # or yarn install
```

### Step 4: Start the Development Server
```sh
npm start  # or yarn start
```

## 📁 Folder Structure

```
OmniCast/
│── client/  # Frontend (React)
│   │── src/
│   │   │── components/  # Reusable UI components
│   │   │── pages/  # Main pages like Home, Login, Dashboard
│   │   │── assets/  # Static assets like images, stylesheets
│   │   └── App.js  # Main React app file
│── server/  # Backend (Node.js, Express, WebSockets, Streaming)
│   │── model/
│   │   └── User.js
│   │── routes/
│   │   └── userRoutes.js
│   │── server.js  # Core backend logic (RTMP, FFmpeg, Socket.io, Docker)
│   │── index.js  # Main server entry point
│── package.json
│── Dockerfile  # Docker container configuration
│── README.md
```

## 📌 Workflow

1. **User starts a live stream.**
2. **OmniCast processes the media using FFmpeg.**
3. **The processed stream is transmitted via RTMP to multiple platforms (YouTube, Instagram, etc.).**
4. **Users interact in real time via Socket.io-powered live chat.**
5. **Streams are securely stored and managed using Cloudinary.**
6. **The entire application runs in a scalable Dockerized environment.**

## 🔮 Future Scope

- ✅ **AI-powered Video Enhancements** (auto-captioning, facial recognition)
- ✅ **Improved Multi-streaming Support** (additional platforms like Twitch, Facebook Live)
- ✅ **Advanced Analytics Dashboard** (viewer engagement, stream quality tracking)
- ✅ **Blockchain-based Monetization** (secure transactions, tipping system)
- ✅ **Augmented Reality (AR) Overlays** (interactive audience engagement)

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature-branch`).
3. **Commit your changes** (`git commit -m "Added new feature"`).
4. **Push to the branch** (`git push origin feature-branch`).
5. **Create a Pull Request**.

## 📜 License

OmniCast is licensed under [MIT License](LICENSE).

## 📧 Contact Us

For questions, feedback, or collaboration opportunities, contact:

### 👨‍💻 Developers

- **Anuj Kumar Singh**  
  - ✉️ [anujkumar37055@gmail.com](mailto:anujkumar37055@gmail.com)  
  - 🔗 [LinkedIn](https://www.linkedin.com/in/anuj-kumar-singh-64a81125a)  
  - 🐙 [GitHub](https://github.com/anuj8155)

- **Nancy Gupta**  
  - ✉️ [nancyg8029@gmail.com](mailto:nancyg8029@gmail.com)  
  - 🔗 [LinkedIn](http://www.linkedin.com/in/nancy-gupta-784b5025a)  
  - 🐙 [GitHub](https://github.com/Nancy0801)

- **Pragya Sharma**  
  - ✉️ [pragyaxibs4834@gmail.com](mailto:pragyaxibs4834@gmail.com)  
  - 🔗 [LinkedIn](https://www.linkedin.com/in/pragya-sharma-4a2136260)  
  - 🐙 [GitHub](https://github.com/pragya79)

- **Abhinav Kumar Jha**  
  - ✉️ [abhinav234765@gmail.com](mailto:abhinav234765@gmail.com)  
  - 🔗 [LinkedIn](https://www.linkedin.com/in/abhinav-kumar-jha-7b406b260)  
  - 🐙 [GitHub](https://github.com/Abhinav-alec)

🚀 **OmniCast - One Broadcast, Infinite Reach!**

