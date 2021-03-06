'use strict';
import React, {PureComponent} from 'react';
import CoreRipple from './CoreRipple';

/**
 * A basic ripple pre-configured to fill an area without being masked
 */
export default class BorderlessRipple extends PureComponent {
	render() {
		return (
			<CoreRipple
				borderless
				maskBorderRadius={0}
				{...this.props} />
		);
	}
}
