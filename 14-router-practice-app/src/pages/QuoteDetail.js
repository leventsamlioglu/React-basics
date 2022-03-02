import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "./../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote Detail Page!</h1>
      <p>{params.quoteID}</p>
      <Route path={`/quotes/${params.quoteID}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
