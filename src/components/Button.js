import React from "react";

class Button extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: false,
		};
	}

	hover() {
		this.setState({ count: true });
	}

	unHover() {
		this.setState({ count: false });
	}

	render() {
		let styleHover = styles.button;
		if (this.state.count) {
			styleHover = styles.hover;
		}

		return (
			<div>
				<button style={styleHover} onMouseEnter={this.hover} onMouseLeave={this.unHover} >Add to <span style={styles.span}>Ipeedy</span></button>
			</div>
		);
	}
}

const styles = {
	button: {
		margin: '3px 6px',
		padding: '10px 45px',
		borderRadius: '5px',
		outline: 0,
		border: 0,
		boxShadow: '0 0 10px 1px #c4c4c4',
		backgroundColor: '#fff',
		color: '#355067',
		fontSize: '1.3em',
		fontSeight: 500,
		transition: 'all 0.3s', 
	},

	span: {
		fontWeight: 600,
	},

	hover: {
		margin: 0,
		padding: '13px 50px',
		fontSize: '1.35em',
		boxShadow: '0 0 25px 1px #c4c4c4',
		borderRadius: '5px',
		outline: 0,
		border: 0,
		backgroundColor: '#fff',
		color: '#355067',
		fontSeight: 500,
		transition: 'all 0.3s',
	},
};

export default Button;
