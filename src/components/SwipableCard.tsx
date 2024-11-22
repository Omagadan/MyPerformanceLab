// SwipableCard.tsx
import React from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const SwipableCard = () => {
  const pan = React.useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }).start();
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.card, { transform: pan.getTranslateTransform() }]}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 300,
    backgroundColor: "lightblue",
    borderRadius: 10,
  },
});

export default SwipableCard;
