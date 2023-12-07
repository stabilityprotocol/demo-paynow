import styled from "styled-components";

export const RequestAttributeWrapper = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;

`;

export const AttributeLabel = styled.p`
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: 200;
`;

export const AttributeValue = styled.p`
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: 400;
`;