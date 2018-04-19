import React from 'react'
import{shallow, mount, render} from 'enzyme'
import StatusSection from './status-section'
import GuessCount from './guess-count'

describe('<StatusSection />', () => {
	it('should mount without crashing', () => {
		shallow(<StatusSection guesses={[]}/>)
	})
	it('should full mount and ?', () => {
		const wrapper = shallow(<StatusSection guesses={[2,3,4]}/>)
		
	})
})