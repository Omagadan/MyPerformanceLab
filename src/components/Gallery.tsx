// Gallery.tsx
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/350",
    "https://via.placeholder.com/400",
  ];

  return (
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <FastImage style={styles.image} source={{ uri: item }} />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    marginVertical: 10,
  },
});

export default Gallery;
