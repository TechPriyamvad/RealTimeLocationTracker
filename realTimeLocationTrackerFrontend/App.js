import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import io from 'socket.io-client';

const socket = io('ws://localhost:4000');
const App = () => {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const locationData = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = locationData;
      const userId = 'user123';
      setLocation(locationData.coords);
      socket.emit('locationUpdate', { userId, latitude, longitude });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location ? location.latitude : 0,
          longitude: location ? location.longitude : 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
          />
        )}
      </MapView>
      <Text>Your Current Location:</Text>
      <Text>Latitude: {location ? location.latitude : ''}</Text>
      <Text>Longitude: {location ? location.longitude : ''}</Text>
      <Button title="Get Location" onPress={() => getLocation()} />
    </View>
  );
};

export default App;
