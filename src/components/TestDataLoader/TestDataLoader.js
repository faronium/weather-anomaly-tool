import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import withLifeCycleLogging from '../../HOCs/withLifeCycleLogging';
import { pick } from '../utils';
import DataLoaderMode from '../DataLoaderMode';
import FakeDataLoader from "../FakeDataLoader/FakeDataLoader";
import RealDataLoader from "../RealDataLoader";

import './TestDataLoader.css';

class TestDataLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'fake',
        };
    }

    render() {
        const dataLoaderProps = pick(this.props, 'variable month year onDataWillLoad onDataDidLoad onDidCatch');
        return (
            <Row>
                <Col lg={2}>
                    <DataLoaderMode value={this.state.mode} onChange={mode => { this.setState({mode}); }}/>
                </Col>
                <Col lg={10}>
                    {
                        this.state.mode === 'fake'
                        ? <FakeDataLoader {...dataLoaderProps}/>
                        : <RealDataLoader {...dataLoaderProps} render={true}/>
                    }
                </Col>
            </Row>
        );
    }
}

TestDataLoader.propTypes = {
    variable: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onDataWillLoad: PropTypes.func.isRequired,
    onDataDidLoad: PropTypes.func.isRequired,
    onDidCatch: PropTypes.func.isRequired,
};

export default withLifeCycleLogging.hoc()(TestDataLoader);
