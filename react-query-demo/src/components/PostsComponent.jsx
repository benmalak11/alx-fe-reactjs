import { useQuery } from "react-query";

// Fetch posts function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 60000, // cache is fresh for 1 minute
      cacheTime: 300000, // cache stays in memory for 5 minutes
      refetchOnWindowFocus: true, // refetch when user focuses window
      keepPreviousData: true,       // keep old data while fetching new
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
