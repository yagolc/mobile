import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_800ExtraBold} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(!fontsLoaded){
    return(
      <Loading/>
    );
  }

  return (
    <View style={styles.container}>
      <Text style ={styles.Text}>teste yago o paciente dms se liga</Text>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#FFF',
    fontFamily: 'Inter_800ExtraBold'
  }
});
