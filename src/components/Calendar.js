import React, {useState} from 'react';
import {Calendar, Agenda} from 'react-native-calendars';
import {StyleSheet, Modal, ScrollView, View, Text, Alert} from 'react-native';

export default function AgendaView() {
  const [items, setItems] = useState({
    '2022-11-08': [{name: 'test1', cookies: false}],
    '2022-11-09': [
      {name: 'test1', cookies: true},
      {name: 'test2', cookies: true},
      {name: 'test3', cookies: true},
      {name: 'test4', cookies: true},
      {name: 'test4', cookies: true},
      {name: 'test4', cookies: true},
      {name: 'test4', cookies: true},
      {name: 'test4', cookies: true},
    ],
  });
  const renderItem = items => {
    return (
      <View style={styles.itemcontainer}>
        <Text>{items.name}</Text>
        <Text>{items.cookies ? 'cookie' : 'smile'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda items={items} renderItem={renderItem} />
    </View>
  );
}

// function CalendarView() {
//   return (
//     <Calendar
//       style={styles.calendar}
//       onDayPress={day => {
//         console.log(day);
//       }}
//     />
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemcontainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  calendar: {
    borderBottomWidth: 5,
    borderBottomColor: '#e0e0e0',
  },
  scheduleContainer: {
    // flex: 0.2,
  },
});
