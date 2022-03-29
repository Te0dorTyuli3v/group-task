import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';

export default function App() {
  return (
    <View style={styles.container}>
     <EventList></EventList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52ff80',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 300
  },
});