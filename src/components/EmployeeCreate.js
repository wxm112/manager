import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
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
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

export default connect(mapStateToProps, { 
    employeeUpdate, employeeCreate })(EmployeeCreate);