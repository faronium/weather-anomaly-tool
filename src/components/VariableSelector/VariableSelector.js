import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-bootstrap';
import { pick } from '../utils';
import RadioButtonSelector from '../RadioButtonSelector';
import './VariableSelector.css';


class VariableSelector extends Component {
    render() {
        const variables = [
            { value: 'precip', label: 'Precipitation', },
            { value: 'tmin', label: <span>T<sub>min</sub></span>, },
            { value: 'tmax', label: <span>T<sub>max</sub></span>, },
        ];
        return (
            <RadioButtonSelector
                name="variable"
                options={variables}
                {...pick(this.props, 'value onChange')}
            />
            // <div>
            //     <ToggleButtonGroup
            //         vertical type="radio" name="variable"
            //         defaultValue={this.props.defaultValue}
            //         onChange={this.props.onChange}
            //     >
            //         <ToggleButton value={'precip'}>
            //             <Glyphicon glyph="cloud"/> Precipitation
            //         </ToggleButton>
            //         <ToggleButton value={'tmin'}>
            //             <Glyphicon glyph="arrow-down"/> T<sub>min</sub>
            //         </ToggleButton>
            //         <ToggleButton value={'tmax'}>
            //             <Glyphicon glyph="arrow-up"/> T<sub>max</sub>
            //         </ToggleButton>
            //     </ToggleButtonGroup>
            // </div>
        );
    }
}

VariableSelector.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

VariableSelector.tooltips = {
    precip: <Tooltip id="precip">Monthly total precipitation</Tooltip>,
    tmin: <Tooltip id="tmin">Monthly average of daily minimum temperature</Tooltip>,
    tmax: <Tooltip id="tmax">Monthly average of daily maximum temperature</Tooltip>,
};

export default VariableSelector;