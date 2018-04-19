import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessCount from './guess-count'

describe('<GuessCount  />', () => {
	it('should mount without crashing', () => {
		shallow(<GuessCount />)
	})
	it('should render guess count h2', () => {
		const wrapper = shallow(<GuessCount guessCount={5}/>)
		expect( wrapper.find('span#count').text() ).toBe("5")
	})
})