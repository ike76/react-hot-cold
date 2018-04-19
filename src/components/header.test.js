import React from 'react'
import {shallow, mount} from 'enzyme'
import Header from './header'

describe('<Header />', () => {
	it('should mount without crashing', () => {
		shallow(<Header />)
	})
	it('should call restart game callback', () => {
		let callback = jest.fn()
		const wrapper = mount(<Header onRestartGame={callback} />)
		let newGameLink = wrapper.find('.new')
		newGameLink.simulate('click')
		expect(callback).toHaveBeenCalled()
	})
	
})