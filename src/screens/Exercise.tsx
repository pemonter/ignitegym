import { Box, Heading, HStack, Icon, Image, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRouterProps } from '@routes/app.routes';

import { Button } from '@components/Button';

import { Feather } from '@expo/vector-icons';
import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRouterProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack bg="gray.600" px={8} pt={16}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon
            as={Feather}
            name="arrow-left"
            color="green.500"
            size={6}
          />
        </TouchableOpacity>

        <HStack alignItems="center" justifyContent="space-between" mt={4} mb={8}>
          <Heading color="gray.100" fontSize="lg" fontFamily="heading" flexShrink={1}>
            Puxada frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />

            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <VStack p={8}>
        <Image
          source={{ uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg' }}
          alt="Nome do exercício"
          w="full"
          h={80}
          mb={3}
          resizeMode="cover"
          rounded="lg"
        />

        <Box bg="gray.600" rounded="md" pb={4} px={4}>
          <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
            <HStack alignItems="center">
              <SeriesSvg />

              <Text color="gray.200" ml={2}>
                3 séries
              </Text>
            </HStack>

            <HStack alignItems="center">
              <RepetitionsSvg />

              <Text color="gray.200" ml={2}>
                12 repetições
              </Text>
            </HStack>
          </HStack>

          <Button
            title="Marcar como realizado"
          />
        </Box>
      </VStack>
    </VStack>
  );
}