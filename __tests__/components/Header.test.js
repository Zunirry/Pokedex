import React from 'react';
import Header from '../../src/components/Header'
import { create } from 'react-test-renderer'

describe('<Header />', () => {

    test('Render of Header component ', () => {
        const header = create(<Header />).toJSON()
        expect(header).toMatchSnapshot();
    })
    
});



export default Header.test;
