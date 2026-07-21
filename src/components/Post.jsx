import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  
  const {  toggleLike, deletePost } = useContext(PostList);

  
  return (

    <div className="card post-card">

      <div className="card-body">

        <div className="post-top">

          <div>

            <h4 className="post-title">
              {post.title}
            </h4>

            <small className="post-date">

              📅 {post.date}

            </small>

          </div>

          <button
            className="delete-btn"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </button>

        </div>

        <p className="post-body">
          {post.body}
        </p>

        <div className="tag-box">

          {post.tags.map((tag) => (

            <span
              key={tag}
              className="badge bg-primary hashtag"
            >
              #{tag}
            </span>

          ))}

        </div>

     <div
  className="reaction-box"
  onClick={()=>toggleLike(post.id)}
>

  {post.liked ? (
      <FaHeart color="red"/>
  ) : (
      <FaRegHeart/>
  )}

  <span>

    {post.reactions} Reactions

  </span>

</div>

      </div>

    </div>

  );

};

export default Post;