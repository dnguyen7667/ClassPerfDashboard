import React, { Component } from 'react';
import timer from '../img/timer.svg'
import { Icon, Header, Statistic } from 'semantic-ui-react';


const AverageTimeTaken = () => (
    <Statistic>
      <Statistic.Value size="tiny">
        <Icon name='time' />
        38 mins
        </Statistic.Value>
      <Statistic.Label>Average time spent on an assignment</Statistic.Label>
    </Statistic>

);

export default AverageTimeTaken;