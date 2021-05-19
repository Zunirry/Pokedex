import React from 'react';
import Search from '../../src/components/Search'
import { create } from 'react-test-renderer'

describe('<Search />', () => {

    test('Render of Search component ', () => {
        const search = create(<Search />).toJSON()
        expect(search).toMatchSnapshot();
    })
    
});



export default Search.test;
