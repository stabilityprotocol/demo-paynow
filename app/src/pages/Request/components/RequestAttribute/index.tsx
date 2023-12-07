import { AttributeLabel, AttributeValue, RequestAttributeWrapper } from "./Styles";

export interface RequestAttributeProps {
    name: string;
    value: string;
}

export const RequestAttribute = (props: RequestAttributeProps) => {
    return (
        <RequestAttributeWrapper>
            <AttributeLabel>{props.name}</AttributeLabel>
            <AttributeValue>{props.value}</AttributeValue>
        </RequestAttributeWrapper>
    );
}