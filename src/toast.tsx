import toast from "react-hot-toast";
import styled, { keyframes } from "styled-components/macro";

const ping = keyframes`
	75%, to {
		opacity: 0;
		transform: scale(2);
	}
`;

const NudgeContainer = styled.div`
	align-items: center;
	background-color: rgb(23 23 23);
	border-radius: 8px;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
	color: #ffffff;
	display: flex;
	font-family: Inter, sans-serif;
	padding: 12px 16px;

	& > * + * {
		margin-left: 16px;
	}
`;

const PingContainer = styled.div`
	display: flex;
	position: relative;
	width: 24px;
	height: 24px;
`;

const PingAnimation = styled.div`
	animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
	background-color: #1fbf99;
	border-radius: 999999999px;
	display: inline-flex;
	opacity: 75%;
	position: absolute;
	width: 100%;
	height: 100%;
`;

const PingCenter = styled.div`
	background-color: #1fbf99;
	border-radius: 999999999px;
	display: inline-flex;
	opacity: 75%;
	position: relative;
	width: 24px;
	height: 24px;
`;

const Text = styled.div`
	& > * + * {
		margin-top: 8px;
	}
`;

const Line1 = styled.div`
	font-size: 14px;
	font-weight: 700;
	line-height: 20px;
`;

const Line2 = styled.div`
	font-size: 12px;
	line-height: 16px;
`;

export const nudge = (line1: string, line2: string) => {
	return toast.custom(() => {
		return (
			<NudgeContainer>
				<PingContainer>
					<PingAnimation />
					<PingCenter />
				</PingContainer>
				<Text>
					<Line1>{line1}</Line1>
					<Line2>{line2}</Line2>
				</Text>
			</NudgeContainer>
		);
	});
};
