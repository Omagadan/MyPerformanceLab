// AnimatedList.tsx
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const AnimatedList = () => {
  const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item}</Text>
        </View>
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
});

export default AnimatedList;
