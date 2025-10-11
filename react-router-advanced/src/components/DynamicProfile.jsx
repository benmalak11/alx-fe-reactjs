import { useParams } from "react-router-dom";

function DynamicProfile() {
  const { userId } = useParams();
  return <h2>Dynamic Profile for User ID: {userId}</h2>;
}

export default DynamicProfile;
