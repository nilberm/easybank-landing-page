import { Title1, TextStyled, InviteBtnStyled } from "./style";

interface TitleProps {
  text: string;
}

interface InviteBtnProps {
  to: string;
}

export const MainTitle = (props: TitleProps) => {
  return <Title1>{props.text}</Title1>;
};

export const Text = (props: TitleProps) => {
  return <TextStyled>{props.text}</TextStyled>;
};

export const InviteBtn = (props: InviteBtnProps) => {
  return <InviteBtnStyled to={`${props.to}`}>Request Invite</InviteBtnStyled>;
};
