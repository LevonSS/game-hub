import { FormLabel, HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        id="color mode"
      />
      <FormLabel whiteSpace='nowrap' htmlFor="color mode" mb="0">
        Datk Mode
      </FormLabel>
    </HStack>
  );
};

export default ColorModeSwitch;
