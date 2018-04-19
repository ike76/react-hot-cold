import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessForm from './guess-form'

describe('<GuessForm .>', () => {
	it('should mount without crashing', () => {
		shallow(<GuessForm />)
	})
	it('should call cb on guess', () => {
		const callback = jest.fn()
		const guessNumber = '10'
		const wrapper = mount(<GuessForm onMakeGuess={callback} />)
		wrapper.find('#userGuess').instance().value = guessNumber;
		wrapper.simulate('submit')
		expect(callback).toHaveBeenCalledWith(guessNumber)
	})
	it('should reset input after form submitted', () => {
		const callback = jest.fn()
		const wrapper = mount(<GuessForm onMakeGuess={callback} />)
		const numInput = wrapper.find('#userGuess').instance()
		numInput.value = '10'
		wrapper.simulate('submit')
		expect(callback).toHaveBeenCalledWith('10')
		expect(numInput.value).toEqual('')
	})
})