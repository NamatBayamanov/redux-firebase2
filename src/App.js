import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUser from "./components/AddUser/AddUser";
import Posts from "./components/Posts/Posts";
import { loadUsers } from "./redux/slices/usersSlice";
function App() {


  const dispatch = useDispatch();


  const users = useSelector((store) => store.user.users);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const output = users.map((user) => {
    return <li key={user.id}>{user.name}</li>;
  });

  return (
    <div className="App">
      <ul>{output}</ul>
      <AddUser/>
      <Posts/>
    </div>
  );
}

export default App;
