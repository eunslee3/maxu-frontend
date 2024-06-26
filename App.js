import React, { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './pages/LandingPage';
import Login from './pages/login_signup/Login';
import useFonts from './pages/utils/useFonts';
import * as SplashScreen from 'expo-splash-screen';

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
    <NavigationContainer isReady={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen name='Landing Page' options={{ headerShown: false }} component={LandingPage} />
        <Stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
