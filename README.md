# CityPulse - Local Event Explorer

CityPulse is a React Native mobile application that helps users discover and explore local events in their area. Built with React Native 0.82.1 and React 19.1.1, the app provides a seamless experience for browsing events, viewing details, and managing favorites.

## Features

- 🔍 **Event Search**: Search events by keyword and city
- 📅 **Event Details**: Comprehensive event information including date, time, venue, and location
- ⭐ **Favorites**: Save and manage your favorite events
- 🗺️ **Map Preview**: Visual location preview for event venues
- 🌐 **Multi-language Support**: English and Arabic (RTL support)
- 🎨 **Modern UI**: Beautiful, responsive design with smooth animations
- 📱 **Cross-platform**: Works on both iOS and Android

## Tech Stack

- **React Native**: 0.82.1
- **React**: 19.1.1
- **TypeScript**: 5.8.3
- **Navigation**: React Navigation (Stack & Bottom Tabs)
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Animations**: React Native Reanimated 4.1.5
- **UI Components**:
  - Bottom Sheet Modal (@gorhom/bottom-sheet)
  - Fast Image (@d11/react-native-fast-image)
  - Vector Icons (Octicons)
- **Internationalization**: i18next & react-i18next
- **Date Formatting**: date-fns
- **HTTP Client**: Axios

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: >= 20.x
- **npm** or **yarn**
- **React Native development environment** set up:
  - For iOS: Xcode (macOS only)
  - For Android: Android Studio with Android SDK
- **CocoaPods** (for iOS development)

For detailed setup instructions, refer to the [React Native Environment Setup Guide](https://reactnative.dev/docs/set-up-your-environment).

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/abnawaz1416/City-Pulse.git
cd City-Pulse
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# OR using yarn
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
API_BASE_URL=https://app.ticketmaster.com/discovery/v2/
API_KEY=your_ticketmaster_api_key_here
```

**Note**: You'll need to obtain a Ticketmaster API key from [Ticketmaster Developer Portal](https://developer.ticketmaster.com/).

### 4. iOS Setup (macOS only)

Navigate to the iOS directory and install CocoaPods dependencies:

```bash
npx pod-install ios
```

### 5. Android Setup

No additional setup required for Android. The project is configured to work out of the box.

## Run Commands

### Start Metro Bundler

```bash
# Using npm
npm start

# OR using yarn
yarn start
```

### Run on Android

```bash
# Using npm
npm run android

# OR using yarn
yarn android
```

**Note**: Make sure you have an Android emulator running or a physical device connected with USB debugging enabled.

### Run on iOS (macOS only)

```bash
# Using npm
npm run ios

# OR using yarn
yarn ios
```

**Note**: Make sure you have Xcode installed and an iOS Simulator available, or a physical iOS device connected.

### Additional Commands

```bash
# Run linter
npm run lint

# Run tests
npm test
```

## Assumptions Made

1. **API Configuration**:

   - The app assumes you have a valid Ticketmaster API key
   - API base URL is configured for Ticketmaster Discovery API v2
   - API key is stored in environment variables via `react-native-config`

2. **Device Requirements**:

   - iOS: Requires iOS 13.0 or later
   - Android: Requires Android 6.0 (API level 23) or later
   - Device has internet connectivity for API calls

3. **Development Environment**:

   - React Native development environment is properly configured
   - For iOS: Xcode and CocoaPods are installed (macOS only)
   - For Android: Android Studio with proper SDK and emulator setup

4. **Permissions**:

   - Internet permission is granted (automatically configured)
   - Location permissions may be required for future map features

5. **Language Support**:

   - English and Arabic are fully supported
   - RTL (Right-to-Left) layout is automatically handled for Arabic

6. **Data Storage**:
   - Favorites are stored locally using AsyncStorage
   - Language preference is persisted locally

## Project Structure

```
CityPulse/
├── android/                 # Android native code
├── ios/                     # iOS native code
├── src/
│   ├── assets/             # Images and static assets
│   ├── common/             # Shared utilities, types, configs
│   │   ├── config/         # API configuration
│   │   ├── constants/      # App constants
│   │   ├── hooks/          # Custom React hooks
│   │   ├── localization/   # i18n translation files
│   │   ├── services/       # API services
│   │   ├── store/          # Zustand stores
│   │   └── types/          # TypeScript type definitions
│   ├── components/         # Reusable React components
│   │   ├── common/         # Common UI components
│   │   ├── detail/         # Event detail components
│   │   ├── favorite/       # Favorite-related components
│   │   ├── home/           # Home screen components
│   │   └── navigation/    # Navigation components
│   ├── navigation/         # Navigation configuration
│   └── screens/            # Screen components
│       ├── eventDetail/    # Event detail screen
│       ├── favorite/       # Favorites screen
│       ├── home/           # Home screen
│       ├── profile/        # Profile screen
│       └── splash/         # Splash screen
├── App.tsx                 # Root component
├── index.js                # Entry point
└── package.json            # Dependencies and scripts
```

## Video Demo

<!-- Add your video link here when available -->

**Demo Video**: [Link to video demonstration]


## Troubleshooting

### Common Issues

1. **Metro bundler cache issues**:

   ```bash
   npm start -- --reset-cache
   ```

2. **iOS build issues**:

   ```bash
   cd ios
   rm -rf Pods Podfile.lock
   pod install
   cd ..
   ```

3. **Android build issues**:

   ```bash
   cd android
   ./gradlew clean
   cd ..
   ```

4. **Module not found errors**:

   ```bash
   rm -rf node_modules
   npm install
   ```

5. **Reanimated not working**:
   - Ensure you've followed the [Reanimated setup guide](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)
   - For iOS, make sure you've run `pod install`

**Built with ❤️ using React Native**
