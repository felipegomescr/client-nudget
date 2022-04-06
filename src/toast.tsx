import toast from "react-hot-toast";
import styled from "styled-components";

const Container = styled.div`
	background-color: #ffffff;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	color: #2d2d2d;
	font-size: 16px;
	line-height: 1.5;
	padding: 16px;
`;

export const nudge = (message: string) => {
	return toast.custom(() => {
		return <Container>{message}</Container>;
	});
};
