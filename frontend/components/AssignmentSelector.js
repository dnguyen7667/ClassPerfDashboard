import React from 'react'
import { Dropdown } from 'semantic-ui-react';

const choices = [
  {
    key: 'Quiz 1',
    text: 'Quiz 1',
    value: '',
  },
  {
    key: 'Quiz 2',
    text: 'Quiz 2',
    value: 'Quiz 2',
  },
  {
    key: 'Test 1',
    text: 'Test 1',
    value: 'Test 1',
   
  }
  
]

const AssignmentSelector = () => (
  <Dropdown
    placeholder='Select Assignment'
    fluid
    selection
    options={choices}
  />
)

export default AssignmentSelector;