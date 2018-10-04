import React from 'react';

// Styles
import styled from 'styled-components';

const UserDiv = styled.div`
	border: 1px solid black;
	border-radius: 5px;
	background-color: #ddd;
	width: 200px;
	height: 200px;
	margin: 20px;
	box-shadow: 0 8px 16px 0 rgba(0,0,0,1);
    transition: 0.3s;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	animation-name: grow-anim;
	animation-duration: 1s;
	animation-fill-mode: forwards;

	&:hover {
		background-color: #444;
		cursor: pointer;
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

		p {
			color: white;
		}
	}

	p {
		text-align:center;
	}
`;

const User = props => {
	const { user, handleUserClick } = props;
	return(
		<UserDiv onClick = { () => handleUserClick(user.id) }>
			<p>ID: { user.id }</p>
			<p>Name: { user.name }</p>
		</UserDiv>
	);
}

export default User;
