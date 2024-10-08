import React, { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import useFonts from "./pages/utils/useFonts";
import * as SplashScreen from "expo-splash-screen";

import LandingPage from './pages/LandingPage';
import Login from './pages/login_signup/Login';
import ExploreFashion from './pages/explore/ExploreFashion';
import Camera from './pages/utils/Camera';
import ViewPhoto from './pages/explore/ViewPhoto';

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer
      isReady={onLayoutRootView}
      fallback={<Text>Loading...</Text>}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Landing Page"
          options={{ headerShown: false }}
          component={LandingPage}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="Explore Fashion"
          options={{ headerShown: false }}
          component={ExploreFashion}
        />
        <Stack.Screen
          name="Camera"
          options={{ headerShown: false }}
          component={Camera}
        />
        <Stack.Screen
          name="View Photo"
          options={{ headerShown: false }}
          component={ViewPhoto}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
