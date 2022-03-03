import { Fragment } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "./../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Leo", text: "Learning react is not easy!" },
  { id: "q2", author: "Gil", text: "Learning react is not hard!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteID);

  if (!quote) {
    return <p>Quote not found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
