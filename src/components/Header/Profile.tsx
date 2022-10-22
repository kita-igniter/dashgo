import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Samuel Mesquita</Text>
          <Text color="gray.300" fontSize="small">
            smtecsystem.469@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Samuel Mesquita"
        src="https://github.com/kita-igniter.png"
      />
    </Flex>
  );
}
