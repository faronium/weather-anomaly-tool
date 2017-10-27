// IncrementDecrement: Component that provides a control for incrementing or decrementing a value.
//
// Clicking on "-" button (decrement) button causes callback to be called with negative `by` value;
// clicking on "+" button (increment), with positive `by`.
//
// Increment/decrement amount can be a single fixed number, or can be selected by dropdown control
// from an array of numbers, according to the type of property `by`.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, Glyphicon, DropdownButton, MenuItem } from 'react-bootstrap';

import classNames from 'classnames';

import { pick } from '../utils';

import './IncrementDecrement.css';

class IncrementDecrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            by: Array.isArray(this.props.by) ? this.props.by[0] : this.props.by,
        };
    }

    render() {
        let selector = null;
        if (Array.isArray(this.props.by)) {
            selector = (
                <DropdownButton
                    {...pick(this.props, 'id bsSize')}
                    title={this.state.by}
                    onSelect={by => this.setState({by: +by})}
                >
                    {this.props.by.map(by =>
                        <MenuItem key={by} eventKey={by} className={'btn-xs'}>{by}</MenuItem>
                    )}
                </DropdownButton>
            );
        }

        return (
            <ButtonGroup className={classNames('IncrementDecrement', this.props.className)}>
                <Button bsSize={this.props.bsSize} onClick={() => this.props.onIncrement(-this.state.by)}>
                    <Glyphicon glyph={'minus'}/>
                </Button>
                {selector}
                <Button bsSize={this.props.bsSize} onClick={() => this.props.onIncrement(this.state.by)}>
                    <Glyphicon glyph={'plus'}/>
                </Button>
            </ButtonGroup>
        );
    }
}

IncrementDecrement.propTypes = {
    by: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),
    // Determines the value with which the callback is called. If an array of numbers is provided,
    // a dropdown selector allows the user to select an increment value from the array. If a single
    // number is provided, there is no dropdown selector and this is the increment value.
    onIncrement: PropTypes.func.isRequired,
    // Callback called with either `-by` (decrement) or `+by` (increment), where `by` is the currently
    // chosen increment value.
};

IncrementDecrement.defaultProps = {
    by: 1,
};

export default IncrementDecrement;