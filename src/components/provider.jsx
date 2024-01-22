import UserContext from '../context/UserContext';

export default function Provider() {
  const [pseudo, setPseudo] = useState(null);
  const handleLoginSubmit = (userName) => {
    setPseudo(userName);
  };
  return pseudo ? (
    <UserContext.Provider value={{ isLogged: true, pseudo: pseudo }}>
      <Layout />
    </UserContext.Provider>
  ) : (
    <Login onLoginSubmit={handleLoginSubmit} />
  );
}