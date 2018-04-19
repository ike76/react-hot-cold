import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessList from './guess-list'

describe('<GuessList />', () => {
	it('should mount without crashing', () => {
		shallow(<GuessList guesses={[]}/>)
	})
	it('should display list of guesses', () => {
		const guessArray = ['3', '4', '5', '6']
		const wrapper = mount(<GuessList guesses={guessArray} />)
		expect( wrapper.find('#guessList').html() ).toMatch('<li>4</li>')
		expect( wrapper.find('#guessList').html() ).not.toMatch('<li>7</li>')
	})
})