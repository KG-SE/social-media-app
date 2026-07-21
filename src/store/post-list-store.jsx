import { createContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  toggleLike: () => {}
});

const postListReducer = (currPostList, action) =>{
  let newPostList = currPostList
  if (action.type === "DELETE_POST"){
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
  } else if(action.type === "ADD_POST"){
    newPostList = [action.payload,...currPostList]
  }
 else if(action.type === "TOGGLE_LIKE"){

  newPostList = currPostList.map((post)=>{

    if(post.id === action.payload.postId){

      return{

        ...post,

        liked: !post.liked,

        reactions: post.liked
          ? post.reactions - 1
          : post.reactions + 1

      };

    }

    return post;

  });

}
  return newPostList
};

const PostListProvider = ({children}) =>{
const [postList, dispatchPostList] = useReducer(
  postListReducer,
  Default_Post_List,
  (defaultPosts) => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : defaultPosts;
  }
);

  const addPost = (userId,postTitle,postBody,postReactions,postTags) =>{
    dispatchPostList({
      type: "ADD_POST",
      payload:{
      id: Date.now(),
      userId: userId,
      date:new Date().toLocaleDateString(),
      title: postTitle,
      body: postBody,
      reactions: Number(postReactions),
      tags: postTags
      }
    })
    toast.success("Post Created Successfully 🚀");
  };

  const deletePost = (postId) =>{
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId
      }
    })
    toast.error("Post Deleted 🗑️");
  };

 const toggleLike = (postId)=>{

  const post = postList.find((p) => p.id === postId)

  dispatchPostList({

    type:"TOGGLE_LIKE",

    payload:{
      postId
    }

  });
  if(post.liked){
    toast.warning("You removed your like 💔")
  }
  else{
    toast.success("You liked this post ❤️")
  }

};

  useEffect(() => {
  localStorage.setItem("posts", JSON.stringify(postList));
  }, [postList]);

   return (
    <>
    <PostList.Provider value={{postList,addPost,deletePost,   toggleLike}}>{children}</PostList.Provider>
    </>
  )
};

const storedPosts = localStorage.getItem("posts");
  
const Default_Post_List = [
  {
    id: 1,
    date: "08/07/2026",
    userId: "101",
    title: "Goto Trip",
    body: "Hi friends, we are going to trip and have a lot of enjoy!",
    reactions: 4,
    liked: false,
    tags: ["Trip", "Enjoy", "Family"]
  },

  {
    id: 2,
    date: "09/07/2026",
    userId: "102",
    title: "Learning React.js",
    body: "Hi friends, i am learning React.js with a lot of fun.",
    reactions: 9,
    liked: false,
    tags: ["React", "Learning", "Fun"]
  }
];
export default PostListProvider;
