import React, {useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

export default function DepartmentSelection({navigation}) {
  
  const [college, setCollege] = useState('');
  const [department, setDepartment] = useState('');
  const [club, setClub] = useState('');

  const colleges = [
    {key: 'Engineering', value: '공과대학'},
    {key: 'NatureScience', value: '자연과학대학'},
    {key: 'Art', value: '예술대학'},
  ];

  const departments = {
  'Engineering': [
    {key:'com', value:'컴퓨터공학과'},
    {key:'mech', value:'기계공학과'},
  ],
  'NatureScience': [
    {key:'math', value:'수학과'},
    {key:'physics', value:'물리학과'},
  ],
  'Art': [
    {key:'ind', value:'산업디자인학과'},
    {key:'fa', value:'패션학과'},
  ]
};
  
  const clubs = {
    'com' : [
      {key:'CPU', value:'CPU'},
      {key:'DCA', value:'DCA'},
    ]
  };

  return(
    <View style={styles.container}>
      <View style={styles.collegeContainer}>
        <SelectList
        data={colleges} 
        setSelected={setCollege} 
        placeholder={'select your college'}
        defaultOption={{ key:'Engineering', value:'공과대학'}}
        boxStyles={{borderColor:'#ffdab9'}}
        inputStyles={{color:'black'}}
        dropdownTextStyles={{color:'black'}}
        search={false}

        />
      </View>
      <View style={styles.departmentContainer}>
        <SelectList
        data={departments[college]} 
        setSelected={setDepartment} 
        placeholder={'select your department'}
        boxStyles={{borderColor:'#ffdab9'}}
        inputStyles={{color:'black'}}
        dropdownTextStyles={{color:'black'}}
        search={false}
        />
      </View>
      <View style={styles.clubContainer}>
      <SelectList 
        data={clubs[department]} 
        setSelected={setClub} 
        placeholder={'select your clubs'}
        boxStyles={{borderColor:'#ffdab9'}}
        inputStyles={{color:'black'}}
        dropdownTextStyles={{color:'black'}}
        search={false}
        onSelect={useCallback(() => {
            navigation.push(club);
          })}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  collegeContainer: {
    marginVertical: 10,
  },
  departmentContainer: {
    marginVertical: 10,
  },
  clubContainer: {
    marginVertical: 10,
  },
  moveButton: {
    marginVertical: 10,
    backgroundColor: 'white',
  }
});