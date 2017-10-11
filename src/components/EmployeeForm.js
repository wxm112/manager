import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {

    render() {
        console.log(this.props);
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={
                            text => this.props.employeeUpdate({ props: 'name', value: text })
                        }
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={
                            text => this.props.employeeUpdate({ props: 'phone', value: text })
                        }
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ props: 'shift', value })}
                    >
                        <Picker.Item label="Mon" value="Mon" />
                        <Picker.Item label="Tue" value="Tue" />
                        <Picker.Item label="Wed" value="Wed" />
                        <Picker.Item label="Thu" value="Thu" />
                        <Picker.Item label="Fri" value="Fri" />
                    </Picker>
                </CardSection>
            </View>

        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);

