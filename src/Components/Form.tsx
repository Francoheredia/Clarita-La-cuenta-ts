import React from 'react';
import {
  Stack,
  Box,
  VStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Center,
} from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

const Form = () => {
  return (
    <Center>
      <form>
        <VStack bg="blackAlpha.200" spacing={3} height="100vh">
          <FormControl isRequired id="user">
            <InputGroup>
              <InputLeftAddon children="User" bg="transparent" />
              <Input type="text" id="user" />
            </InputGroup>
          </FormControl>
        </VStack>
      </form>
    </Center>
  );
};

export default Form;
