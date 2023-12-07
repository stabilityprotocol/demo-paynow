import { UserIconWrapper, UserIconCircle } from "./Styles";

export interface UserIconProps {
    name: string;
    letters: string;
}
export const UserIcon = (props: UserIconProps) => {

    return (
        <UserIconWrapper>
            <UserIconCircle>{props.letters}</UserIconCircle>
            <p>{props.name}</p>
        </UserIconWrapper>
    );
}