import React, { useContext, useState, useLayoutEffect } from 'react';
import { Alert, FlatList, TouchableOpacity, Modal, View, TextInput, StyleSheet } from 'react-native';
import {
  Container,
  Container2,
  TextForm,
  Title,
  InsertButtonContainer,
  CloseButtonContainer,
  ModalContainer
} from './styles';
import { ButtonAdd } from '../../Components/ButtonAdd';
import { Card } from '../../Components/Card';
import { ListEmpty } from '../../Components/ListEmpty';
import { DenialContext } from '../../../context/DenialContext';
import { Denial } from '../../../reducers/types';
import { AntDesign } from '@expo/vector-icons';
import { Input } from '../../Components/Input';

export function Projects({ navigation }: any) {
  const { todos, addTodo } = useContext(DenialContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [importancy, setImportancy] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonAdd onPress={() => setModalVisible(true)} />
      ),
    });
  }, [navigation]);

  function handleAddTodo() {
    if (description && priority && initialDate && importancy) {
      const todo: Denial = {
        id: Math.round(100000 * Math.random()),
        description,
        priority,
        initialDate,
        importancy,
      };
      addTodo(todo);
      setDescription('');
      setPriority('');
      setInitialDate('');
      setImportancy('');
      setModalVisible(false);
    } else {
      Alert.alert('Por favor, preencha todos os campos');
    }
  }

  return (
    <Container>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            description={item.description}
            initialDate={item.initialDate}
            importancy={item.importancy}
            priority={item.priority}
          />
        )}
        ListEmptyComponent={ListEmpty}
      />

      <ModalContainer
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal fechado');
          setModalVisible(false);
        }}
      >
        <Container2>
          <CloseButtonContainer>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign name="closesquareo" size={32} color="black" />
            </TouchableOpacity>
          </CloseButtonContainer>

          <Title>Preencha o formulário de informações:</Title>
          <Input
            placementText={"Economize, faça atividades físicas, leia o livro..."}
            value={description}
            onChangeText={setDescription}
            contextMenuHidden={true}
          />
          <Input
            placementText={"Prioridade"}
            value={priority}
            onChangeText={setPriority}
            keyboardType='numeric'
          />
          <Input
            placementText={"Importância"}
            value={importancy}
            onChangeText={setImportancy}
          />
        
          <InsertButtonContainer>
            <TouchableOpacity onPress={handleAddTodo} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextForm>Inserir</TextForm>
              <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
          </InsertButtonContainer>

        </Container2>
      </ModalContainer>
    </Container>
  );
}

