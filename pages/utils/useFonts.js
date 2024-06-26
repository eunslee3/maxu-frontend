import { loadAsync } from 'expo-font';

const useFonts = async () => {
  await loadAsync({
    'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Light': require('../../assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default useFonts;
