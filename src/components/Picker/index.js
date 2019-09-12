import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {findIndex} from 'lodash';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';

class Picker extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: props.initialValue ? props.initialValue : props.items[0],
    };
  }

  doChangeValue = selectedItem => {
    const {onChange, items} = this.props;

    const newValueIndex = findIndex(items, item => item.value === selectedItem);
    const newValue = items[newValueIndex];
    this.setState({selectedItem: newValue});
    if (onChange) {
      onChange(selectedItem);
    }
  };

  render() {
    const {items, placeholder, ...rest} = this.props;
    const {selectedItem} = this.state;

    return (
      <View style={styles.container}>
        <RNPickerSelect
          placeholder={{}}
          items={items}
          onValueChange={this.doChangeValue}
          value={selectedItem.value}
          {...rest}>
          <View style={styles.textContainer}>
            <Text>{selectedItem.label}</Text>
          </View>
        </RNPickerSelect>
      </View>
    );
  }
}

export default Picker;
