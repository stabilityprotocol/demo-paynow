import styled from 'styled-components';
import { Button } from '../../components/Button';

export const ButtonStyled = styled(Button)`
    width: 80%;
    margin-top: ${(props) => props.theme.spacing.large};
`;