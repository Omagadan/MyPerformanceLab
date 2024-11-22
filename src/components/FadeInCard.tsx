import React, { useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";

interface FadeInCardI {
  children?: React.ReactNode;
}

const FadeInCard = ({ children, ...props }: FadeInCardI) => {
  const opacity = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, []);

  return <Animated.View style={[styles.card, { opacity }]} />;
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 300,
    backgroundColor: "pink",
    borderRadius: 10,
  },
});

export default FadeInCard;
