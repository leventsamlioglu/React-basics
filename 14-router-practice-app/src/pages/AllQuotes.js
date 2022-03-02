import QuoteList from "./../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Leo", text: "Learning react is not easy!" },
  { id: "q2", author: "Gil", text: "Learning react is not hard!" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export default AllQuotes;
