import { useState } from 'react';
import { Center, Heading, ScrollView, Skeleton, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 36 }}
      >
        <Center mt={6} px={10}>
          {
            photoIsLoading ?
              <Skeleton
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded="full"
                startColor="gray.500"
                endColor="gray.300"
              />
              : <UserPhoto
                source={{ uri: 'http://github.com/pemonter.png' }}
                alt="Foto de perfil do usuário"
                size={PHOTO_SIZE}
              />
          }

          <TouchableOpacity>
            <Text color="green.500" fontFamily="heading" fontSize="md" mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input
            placeholder="Nome"
            bg="gray.600"
          />

          <Input
            value="pedro@gmail.com"
            bg="gray.600"
            isDisabled
          />

          <Heading
            color="gray.200"
            fontFamily="heading"
            fontSize="md"
            mb={2}
            mt={8}
            alignSelf="flex-start"
          >
            Alterar senha
          </Heading>

          <Input
            placeholder="Senha antiga"
            bg="gray.600"
            secureTextEntry
          />

          <Input
            placeholder="Nova senha"
            bg="gray.600"
            secureTextEntry
          />

          <Input
            placeholder="Confirme a nova senha"
            bg="gray.600"
            secureTextEntry
          />

          <Button
            title="Atualizar"
            mt={4}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}