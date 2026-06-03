const Header = () => {
  return (

    <Header>
        <nav>
            <link to="/">Home</link>
            <link to="/perfil">Perfil</link>
            <link to="/mypage">Mypage</link>
            <span>({usuario})</span>
        </nav>
    </Header>

  );
};

export default Header; 