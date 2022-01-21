import { StyleSheet, View } from 'react-native';
import { AppTemplate } from './components/templates'
import {
  useFonts,
  RobotoSlab_700Bold,
  RobotoSlab_100Thin,
  RobotoSlab_400Regular
} from "@expo-google-fonts/roboto-slab";

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoSlab_700Bold,
    RobotoSlab_100Thin,
    RobotoSlab_400Regular
  });

  if (!fontsLoaded) {
    return <View />;
  }
  
  return (
    <View style={styles.container}>
      <AppTemplate />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#344966',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 90,
    paddingHorizontal: 50
  }
});
