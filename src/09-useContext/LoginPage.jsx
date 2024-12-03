import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <pre>{JSON.stringify(user)}</pre>

      <button
        className="btn btn-primary"
        onClick={() => {
          setUser({
            id: 123,
            name: "Victor Nuñez",
            email: "victoralejandronunezt@gmail.com",
          });
        }}
      >
        Establecer Usuario
      </button>
    </div>
  );
};

export default LoginPage;
