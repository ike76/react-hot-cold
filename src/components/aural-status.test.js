import React from 'react'
import {shallow} from 'enzyme'
import AuralStatus from './aural-status'

describe('<AuralStatus />', () => {
	it('renders without crashing', () => {
		shallow(<AuralStatus />)
	})
	it('renders an update', () => {
		let STATUS = 'hey hi there'
		let wrapper = shallow(<AuralStatus auralStatus={STATUS}/>)
		expect(wrapper.contains(STATUS)).toEqual(true)
	})
})