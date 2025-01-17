import RNPickerSelect from 'react-native-picker-select';
import { Text } from 'react-native';
import {pickerStyles,styles} from '../stylesheets/Homepage'
export const Picker = ({ label, items, onValueChange, value }) => (
    <>
      <Text style={styles.label}>{label}</Text>
      <RNPickerSelect
        onValueChange={onValueChange}
        value={value}
        items={items}
        placeholder={{ label: '-- Choose --', value: null }}
        style={pickerStyles}
      />
    </>
  );