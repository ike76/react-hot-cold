import React from 'react'
import {shallow, mount} from 'enzyme'
import InfoSection from './info-section'

describe('<InfoSection />', () => {
	it('should mount without crashing', () => {
		shallow(<InfoSection />)
	})
})