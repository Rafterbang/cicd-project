import React from "react";
import { View, Text } from "react-native";

const sum = (a, b) => {
  return a + b;
};

const App = () => {
  const result = sum(3, 5);

  return (
    <View>
      <Text>Result: {result}</Text>
    </View>
  );
};

export default App;
