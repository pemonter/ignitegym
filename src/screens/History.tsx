import { useState } from 'react';
import { Heading, SectionList, Text, VStack } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '26.08.22',
      data: ['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terra']
    }
  ])
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <HistoryCard title={item}/>
        )}
        renderSectionHeader={({section}) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={!exercises.length && {flex: 1, justifyContent: "center"}}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center"> 
            Não há exercícios registrados ainda. {'\n'}
            Vamos treinar hoje?
          </Text>
        )}
      />

    </VStack>
  );
}