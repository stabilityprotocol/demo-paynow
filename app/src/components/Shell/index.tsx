import { ShellWrapper } from "./Styles";

export const Shell: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ShellWrapper>{children}</ShellWrapper>;
};
