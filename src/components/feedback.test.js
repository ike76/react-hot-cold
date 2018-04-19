import React from 'react'
import {shallow, mount} from 'enzyme';

import Feedback from './feedback'

describe('</Feedback >', () => {
	it('should mount without crashing', () => {
		shallow(<Feedback />)
	})
	it('should render feedback', () => {
		let props = {
			feedback: 'hey whats up',
		}
		let wrapper = shallow(<Feedback {...props}/>)
		expect(wrapper.contains(props.feedback)).toEqual(true)
	})
	it('should have h2 with #feedback', () => {
		let props = {
			feedback: 'hey whats up',
		}
		let wrapper = shallow(<Feedback {...props}/>)
		let h2 = wrapper.find('#feedback')
		expect( h2.html() ).toMatch(props.feedback)

		
	})
})