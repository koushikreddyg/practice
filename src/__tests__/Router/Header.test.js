import React from 'react';
//import ReactShallowRender from 'react-test-renderer/shallow';
import {shallow} from 'enzyme';
import Header from '../../Router/Header';
test('render the header component',()=>{
    //const renderer=new ReactShallowRender();
    //renderer.render(<Header/>);
    //expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper=shallow(<Header/>)
    expect(wrapper).toMatchSnapshot();
})