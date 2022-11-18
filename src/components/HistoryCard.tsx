import { Heading, HStack, Text, VStack } from 'native-base';

type Props = {
  title: string;
}

export function HistoryCard({title}: Props) {
  return (
    <HStack 
      w="full" 
      px={5} 
      py={4} 
      mb={3} 
      bg="gray.600" 
      rounded="md" 
      alignItems="center" 
      justifyContent="space-between"
    >
      <VStack mr={5}>
        <Heading color="white" fontSize="md" fontFamily="heading" textTransform="capitalize">
          Costas
        </Heading>

        <Text color="gray.100" fontSize="lg" numberOfLines={2}>
          {title}
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md">
        08:56
      </Text>
    </HStack>
  );
}