import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Form from './Components/Form';

const ClaritaLaCuenta = () => {
  return (
    <>
      <Box bg="primary" py={3} textAlign="center" shadow="lg">
        <Text color="secondary" fontWeight="bold" fontSize="2xl">
          {' '}
          Clarita La cuenta{' '}
        </Text>
      </Box>
      <Stack>
        <Form />
      </Stack>
    </>
  );
};

export default ClaritaLaCuenta;
