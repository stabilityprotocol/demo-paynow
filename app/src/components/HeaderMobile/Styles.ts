import styled, { keyframes } from "styled-components";

export const HeaderMobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 95%;
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.box.borderRadius};
  background: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;

  svg,
  > img {
    height: 80%;
    width: auto;
    color: ${(props) => props.theme.colors.green1};
    cursor: pointer;
  }
`;

const PulseAnimation = keyframes`
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
  }
`;

export const HeaderMobileProfileWrapper = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  svg {
    height: 90%;
  }

  .notification {
    position: absolute;
    top: 0;
    right: 0;
    background: ${(props) => props.theme.colors.red2};
    border-radius: 50%;
    height: 0.7rem;
    width: 0.7rem;
    transform: scale(1);
    animation: ${PulseAnimation} 3s infinite;
  }
`;
