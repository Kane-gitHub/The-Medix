import React from 'react';
import Landing from '../Components/Landing';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const mainTree = renderer.create(<Landing />).toJSON();
    expect(mainTree).toMatchSnapshot();
})
