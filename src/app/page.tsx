import { Box, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <Flex bg="var(--mantine-color-blue-3)" ta={"center"} h={"100vh"}>
      <Box p="20" bg="var(--mantine-color-pink-4)" m="auto">
        <Title m="0 auto">Start Fresh</Title>
        <Text>Get going with the linter hopefully working</Text>
      </Box>
    </Flex>
  );
}
