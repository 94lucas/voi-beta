import { TouchableOpacity, Text } from "react-native";
import { Container, Description, Footer, Importancy, Priority, Time } from "./styles";

import { MaterialIcons } from '@expo/vector-icons';
import { Denial } from '../../../reducers/types';

export function Card(props:Denial) {

  return (

    <Container>
      <Description>Descrição do Projeto: {props.description}</Description>
      <Priority>Prioridade: {props.priority}</Priority>
      <Time>Data: {props.initialDate}</Time>
      <Importancy>Importância: {props.importancy}</Importancy>
      <Footer>
        <TouchableOpacity>
          <MaterialIcons name="delete-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="done-outline" size={24} color="black" />
        </TouchableOpacity>
      </Footer>
    </Container>
  )
}
