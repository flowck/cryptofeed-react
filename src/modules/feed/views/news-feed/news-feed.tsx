import "./news-feed.scss";
import { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../store";
import { getNews } from "../../store/feed.thunks";
import { FeedModuleState, News } from "../../store/feed.interfaces";
import { AppThunkDispatch } from "../../../../store/store.types";
import { Topic } from "../../components/topic/topic";

interface Props {
  news: News[];
  getNews(): void;
}

function renderNews(news: News[]) {
  return news.map((topic, index) => <Topic key={index} news={topic} />);
}

function NewsFeed({ news, getNews }: Props) {
  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <section className="news-feed">
      <h1>News feed</h1>
      <hr />
      {news.length ? renderNews(news) : null}
    </section>
  );
}

function mapStateToProps(state: RootState) {
  return { news: (state.feedModule as FeedModuleState).news };
}

function mapDispatchToProps(dispatch: AppThunkDispatch) {
  return {
    getNews: () => dispatch(getNews()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
