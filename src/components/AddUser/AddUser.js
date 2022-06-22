import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/usersSlice";

function AddUser() {

  const dispatch = useDispatch();

  const onAddSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    dispatch(addUser(data.get("name")));

  }


  return (
    
      <form onSubmit={onAddSubmit}>
        <input type="text" name="name" />
        <button>
          add
        </button>
      </form>
  
  );
}

export default AddUser;