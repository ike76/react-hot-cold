import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game'

describe('<Game />', () => {
	it('renders without crashing', () => {
		shallow(<Game />)
	})
	it('updates when guess is entered', () => {
		const wrapper = shallow(<Game />)
		wrapper.instance().makeGuess(15)
		wrapper.instance().makeGuess(30)
		console.log(wrapper.state())
		expect(wrapper.state().guesses).toEqual([15, 30])
	})
	it('can start a new game', () => {
		const wrapper = shallow(<Game />)
		wrapper.setState({
			guesses: [1,2,3,4,5],
			feedback: 'hello',
			correctAnswer: 10
		})
		wrapper.instance().restartGame()

		expect(wrapper.state('guesses')).toEqual([])
		expect(wrapper.state('feedback')).toEqual('Make your guess!')
	})
	it('gets correct feeback from answers', () => {
		const wrapper = shallow(<Game />)
		wrapper.setState({correctAnswer: 10})

		wrapper.instance().makeGuess(90)
		expect(wrapper.state('guesses')).toEqual([90])
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')
	})

})