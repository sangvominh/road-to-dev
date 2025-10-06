import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
export default function Article() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data: article, isPending, error } = useFetch(url);
  const history = useHistory();

  useEffect(() => {
    if (error) {
      // redirect
      // history.goBack();
      // history.push("/")
      setTimeout(() => {
        history.push("/")
      }, 2000);
    }
  }, [error, history]);

  return (
    <div>
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div key={article.id}>
          <h2>{article.id}</h2>
          <p>{article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
