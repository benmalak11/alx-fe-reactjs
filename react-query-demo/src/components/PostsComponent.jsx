import { useQuery } from "react-query";

// Fetching function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  // useQuery handles data fetching, caching, and refetching
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 60000, // Cache stays fresh for 1 minute
      cacheTime: 300000, // Cache remains in memory for 5 minutes
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
