import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postReducer";
import { useNavigate } from "react-router-dom";
import { fetchSinglePost } from "./singlePostReducer";

const Home = () => {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector(state => state.posts.totalPosts)
  const [activepost, setActivePost] = useState("Total Posts");
  const [posts,setPosts] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts())
    setPosts()
  }, [dispatch]);

  console.log(fetchedPosts)

  const singlePostHandler = (id) => {
    navigate('/' + id)
    
    console.log("clicked")
  };

  return (
    <div>
      <h1>{activepost}</h1>
      <ul>
        {fetchedPosts.map((post) => {
          return (
            <li key={post.id}
            onClick={singlePostHandler(post.id)}
            >
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
