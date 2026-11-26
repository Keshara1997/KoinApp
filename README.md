# KoinApp

React Native app on **Expo SDK 52**, **TypeScript**, with recommended client state and animation libraries.

## Stack

| Area | Library |
|------|---------|
| Runtime | [Expo SDK 52](https://docs.expo.dev/versions/v52.0.0/) (managed workflow) |
| Language | TypeScript (`strict`) |
| State | [Zustand](https://github.com/pmndrs/zustand) |
| Animations | [React Native Reanimated 3](https://docs.swmansion.com/react-native-reanimated/) + [Moti](https://moti.fyi/) |
| Gestures | [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) |

New Architecture is enabled (`newArchEnabled: true` in `app.json`).

## Project layout

```
App.tsx                 # Root UI
index.ts                # Entry (registers root component)
src/store/              # Zustand stores
babel.config.js         # Reanimated Babel plugin
```

## Getting started

```bash
npm install
npm start
```

Then open in [Expo Go](https://expo.dev/go) (SDK 52) or run:

- `npm run android`
- `npm run ios` (macOS + Xcode)
- `npm run web`

Clear the Metro cache after changing `babel.config.js`:

```bash
npx expo start -c
```

## Bare React Native

To eject to a dev client or bare workflow later:

```bash
npx expo prebuild
```

Use [EAS Build](https://docs.expo.dev/build/introduction/) for store-ready binaries without leaving the Expo toolchain.

## Adding features

- **Server/async state**: consider [@tanstack/react-query](https://tanstack.com/query) alongside Zustand.
- **Navigation**: add [Expo Router](https://docs.expo.dev/router/introduction/) with `npx expo install expo-router`.
- **More stores**: add files under `src/store/` and keep selectors narrow for fewer re-renders.