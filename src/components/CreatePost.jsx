import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {

  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionsElement = useRef();
  const postTagsElement = useRef();

  const handleSubmit = (event) => {

    event.preventDefault();

    const userId = userIdElement.current.value.trim();

    const postTitle = postTitleElement.current.value.trim();

    const postBody = postBodyElement.current.value.trim();

    const postReactions =
      Number(postReactionsElement.current.value) || 0;

    const postTags = postTagsElement.current.value
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag !== "");

    if (
      !userId ||
      !postTitle ||
      !postBody
    ) {
      alert("Please fill all required fields.");
      return;
    }

    addPost(
      userId,
      postTitle,
      postBody,
      postReactions,
      postTags
    );

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postReactionsElement.current.value = "";
    postTagsElement.current.value = "";
  };

  window.scrollTo({
  top: 0,
  behavior: "smooth",
});

  return (

    <div className="create-post-form">

      <h2>Create New Post</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">

          <label className="form-label">
            User ID
          </label>

          <input
            ref={userIdElement}
            className="form-control"
            type="text"
            placeholder="Enter User ID"
            required
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Title
          </label>

          <input
            ref={postTitleElement}
            className="form-control"
            type="text"
            placeholder="Post Title"
            required
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Content
          </label>

          <textarea
            rows="5"
            ref={postBodyElement}
            className="form-control"
            placeholder="Write something..."
            required
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Reactions
          </label>

          <input
            ref={postReactionsElement}
            className="form-control"
            type="number"
            placeholder="0"
            min="0"
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Tags
          </label>

          <input
            ref={postTagsElement}
            className="form-control"
            type="text"
            placeholder="React, JavaScript, Bootstrap"
          />

          <small className="text-muted">
            Separate tags with commas (,)
          </small>

        </div>

        <button
          className="btn btn-primary w-100"
          type="submit"
        >
          Publish Post 🚀
        </button>

      </form>

    </div>

  );
};

export default CreatePost;