import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'

var datetime = new Date();
// console.log(datetime.toISOString().slice(0,10));

const GeneralStats = () => (
  <Statistic.Group widths='three' size='mini'>
    <Statistic size='mini'>
      <Statistic.Value>UH Casa</Statistic.Value>
      <Statistic.Label>Math 1431 - Section 0001</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Icon name='student' color='green'/>
        17
      </Statistic.Value>
      <Statistic.Label>Students</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Icon name='book' color =  'green'/>5
      </Statistic.Value>
      <Statistic.Label>Assignments</Statistic.Label>
    </Statistic>

   
  </Statistic.Group>
)

export default GeneralStats;