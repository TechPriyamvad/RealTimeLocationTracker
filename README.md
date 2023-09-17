# Introduction

Real time location tracker system is used to track user journey on the dashboard 

## Table of Contents 👇
- [TechStack](techStack)
- [Pre-requisites](prerequistes)
- [Getting Started](gettingStarted)
- [Features](features)

## TechStack 💻

### Mobile App
- react native - frontend framework to build mobile app for both ios and android
- expo-location - for geolocation functionality
- react-native-maps - to show location on maps
- socket.io-client - for real time communication with server

### Server
- express - nodejs backend framework
- socket.io - for real time communication with admin ui
- mongoose - for communicating with mongodb database

## Pre-requistes

1. Install latest version of expo cli
2. Use node js version 18 LTS

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/TechPriyamvad/RealTimeLocationTracker.git

````

2. Install the required dependencies
```bash
cd backend

npm install

cd realTimeLocationTrackerFrontend

npm install
```

3. Run backend application

```bash
cd backend
node app.js
```

4. Run frontend application

```bash
cd realTimeLocationTrackerFrontend

npx expo start
```

5. Run admin UI
- Open admin.html file or use live server package

## Features
- Contains mobile app to fetch user location
- Contains server to capture and store location in mongodb database
- Contains admin UI to track user journey