import React from 'react';
import {shallow} from 'enzyme';
import Home from '../../Router/NotFound';
import {connect} from 'react-redux';
test('test Home',()=>{
    const wrapper=shallow(<Home/>)
    expect(wrapper).toMatchSnapshot();
})