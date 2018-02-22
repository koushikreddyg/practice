import React from 'react';
import App from '../App';
import ReactShallowRender from 'react-test-renderer/shallow';

test('test for app',()=>{
    const renderer=new ReactShallowRender()
    renderer.render(<App/>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})