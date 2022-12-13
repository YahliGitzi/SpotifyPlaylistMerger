import { FC } from "react";
import * as S from "./Login.style";

const Login: FC = () => {
  return (
    <S.LoginContainer>
      <S.LoginTitle>Spotify Playlist Merger</S.LoginTitle>
      <S.LoginBtn variant="contained">Sign in with Spotify</S.LoginBtn>
    </S.LoginContainer>
  );
};

export default Login;
