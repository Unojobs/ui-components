import React from "react";
import { NativeBaseProvider, Box, Button, Icon } from "native-base";
//@ts-ignore
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
      <Box>Hello world</Box>
      <Button
        variant="subtle"
        endIcon={<Icon as={FontAwesome} name="glass" size="sm" />}
      >
        Download
      </Button>
    </NativeBaseProvider>
  );
}
