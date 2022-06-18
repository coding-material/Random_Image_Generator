import { Image, StyleSheet, View } from 'react-native';

export default function AppImage({ url }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    margin: 2.5,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
});
