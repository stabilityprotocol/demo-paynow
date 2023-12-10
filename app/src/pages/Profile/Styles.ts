import styled from "styled-components";

export const ProfileWrapper = styled.div`
  width: 100%;
`;

export const ProfileUpperSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing.medium};
`;

export const ProfileUpperContainer = styled.div`
  padding-top: ${(props) => props.theme.spacing.large};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProfileImage = styled.span`
  height: 5rem;
  width: 5rem;
  background: ${(props) => props.theme.colors.green0};
  color: ${(props) => props.theme.colors.green1};
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UsernameTitle = styled.span`
  margin-top: ${(props) => props.theme.spacing.medium};
  font-family: ${(props) => props.theme.font.secondary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  opacity: 0.8;
`;

export const ProfileName = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.font.secondary};
  font-weight: 800;
`;

export const ProfileLowerSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: ${(props) => props.theme.colors.bgGreen};
  padding: ${(props) => props.theme.spacing.medium};
  display: flex;
  flex-direction: column;
`;

export const ProfileLowerContainer = styled.div`
  margin-top: ${(props) => props.theme.spacing.xlarge};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;

export const ActionBarWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 0%;
  width: 100%;
  padding: 0 ${(props) => props.theme.spacing.medium};
`;
