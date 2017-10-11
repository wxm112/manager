import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            console.log(`EmployeeEdit pass prop=${prop}, value=${value} to employeeUpdate action`);
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props.employee;
        console.log(name, phone, shift);
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateFToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    
    return { name, phone, shift };
};

export default connect(mapStateFToProps, { employeeUpdate })(EmployeeEdit);