import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import { View, Text } from 'react-native';

export function Datec() {
  const [date, setDate] = useState(dayjs());

  return (
    <View style={{backgroundColor:'#9f8'}}>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={(params:any) => setDate(params.date)}
        selectedItemColor={'#3a4'}
        initialView='day'
        calendarTextStyle={{color:'#f21',fontStyle:'italic', fontSize:18}}
        headerContainerStyle={{backgroundColor:'#f3f'}}
        weekDaysContainerStyle={{backgroundColor:'#FF2'}}
        monthContainerStyle={{backgroundColor:'#1FF'}}
      />
      <Text>{JSON.stringify(date)}</Text>
    </View>
  );
}

