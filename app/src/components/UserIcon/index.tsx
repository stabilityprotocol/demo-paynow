import { UserIconWrapper, UserIconCircle, Name } from "./Styles";

export interface UserIconProps {
    name: string;
    letters: string;
}
export const UserIcon = (props: UserIconProps) => {

    return (
        <UserIconWrapper>
            <UserIconCircle>{props.letters}</UserIconCircle>
            <Name>{props.name}</Name>
        </UserIconWrapper>
    );
}