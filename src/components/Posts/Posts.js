import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { loadPosts } from "../../redux/slices/postsSlice/postsSlice";



function Posts() {

  const posts = useSelector((store) => {
    return store.post.posts;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);
  
  const output = posts.map(post => <li key={post.id}>{post.title}</li>);


  return ( 
    <div>
      {output}
    </div>
  );
}

export default Posts;