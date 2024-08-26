import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button title="Button" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});

export default Dashboard;
