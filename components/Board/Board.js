import React, { Component } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text } from 'react-native';

const Board = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <FlatList
      data={cards}
      horizontal={false}
      numColumns={3}
      renderItem={(item) => {
        return (
          <Button
            onPress={(item) => Alert.alert(`item ${item}`)}
            title={`item ${item}`}
            style={{
              color: 'white',
              backgroundColor: '#444499'
            }}
          />
        );
      }}
      style={{
        backgroundColor: 'grey',
        marginTop: 20,
        padding: 20,
        width: '100%'
      }}
    />
  );
}

export default Board;
