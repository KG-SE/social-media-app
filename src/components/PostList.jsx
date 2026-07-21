import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = ({searchText}) => {

  const { postList } = useContext(PostListData);

  const filteredPosts = postList.filter((post)=>

  post.title.toLowerCase().includes(searchText.toLowerCase()) ||

  post.body.toLowerCase().includes(searchText.toLowerCase())

);

  return (

    <>

      {postList.length === 0 ? (

        <div className="empty-post">

          <h2>No Posts Available</h2>

          <p>Create your first post 🚀</p>

        </div>

      ) : (

        filteredPosts.map((post) => (

          <Post
            key={post.id}
            post={post}
          />

        ))

      )}

    </>

  );

};

export default PostList;