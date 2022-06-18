import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import apiLayer from '../api/apiLayer';
import AppButton from '../components/AppButton';
import AppImage from '../components/AppImage';

const initImg =
  'https://images.unsplash.com/photo-1653496905315-fd11ea3ce50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTU1Nzg3MzE&ixlib=rb-1.2.1&q=80&w=1080';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(initImg);

  const apiCall = async () => {
    setLoading(true);
    let response = await apiLayer.getMethod();
    let url = response.data.urls.regular;
    console.log(url);
    setUrl(url);
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <View style={styles.container}>
          <Text style={styles.text}>Please wait ...</Text>
        </View>
      )}
      <AppImage url={url} />

      <AppButton
        title='Refresh For New One'
        onPress={apiCall}
        disable={loading ? true : false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    padding: 12,
  },
});
