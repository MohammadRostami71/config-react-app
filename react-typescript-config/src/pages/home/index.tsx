import { useDispatch } from "react-redux";
import { logout } from "../../store/user/auth.reducers";

const HomePage = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>this is home</h1>

      <br />

      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default HomePage;
