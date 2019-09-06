import React from 'react';
import ReactDOM from 'react-dom';
import Brad from './Brad';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Brad />, div);
  ReactDOM.unmountComponentAtNode(div);
});
