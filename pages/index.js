import React, { Component } from 'react'
import GuestBookApollo from '../components/GuestBookApollo'


export default class index extends Component {
	static async getInitialProps() {
		return {
			name: 'kong'
		}
	}
	render() {
		return (
			<GuestBookApollo />
		)
	}
}
