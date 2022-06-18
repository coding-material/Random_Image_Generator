import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AppButton({ title, onPress, disable }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={onPress}
        disabled={disable}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    height: 55,
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
  },
});
