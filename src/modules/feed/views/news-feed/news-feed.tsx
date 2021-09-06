import "./news-feed.scss";
import { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../store";
import { getNews } from "../../store/feed.thunks";
import { Topic } from "../../components/topic/topic";
import { AppThunkDispatch } from "../../../../store/store.types";
import { DataSelect } from "../../../../common/components/data-select/data-select";
import { Category, FeedModuleState, News, Resource } from "../../store/feed.interfaces";

interface Props {
  news: News[];
  getNews(): void;
  resources: Resource[];
  categories: Category[];
}

function renderNews(news: News[]) {
  return news.map((topic, index) => <Topic key={index} news={topic} />);
}

function NewsFeed({ news, getNews, categories, resources }: Props) {
  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <section className="news-feed">
      <h1>News feed</h1>

      <div className="news-feed__filters is-flex">
        <DataSelect
          onSelect={(value) => console.log(value)}
          keyLabel="name"
          keyValue="name"
          items={[]}
          label="Projects"
          allItemsLabel="All projects"
        />
        <DataSelect
          onSelect={(value) => console.log(value)}
          keyLabel="label"
          keyValue="name"
          items={categories}
          label="Categories"
          allItemsLabel="All categories"
        />
        <DataSelect
          onSelect={(value) => console.log(value)}
          keyLabel="label"
          keyValue="name"
          items={resources}
          label="Resources"
          allItemsLabel="All resources"
        />
      </div>

      <hr />
      {news.length ? renderNews(news) : null}
    </section>
  );
}

function mapStateToProps(state: RootState) {
  const feedModule = state.feedModule as FeedModuleState;
  return { news: feedModule.news, categories: feedModule.categories, resources: feedModule.resources };
}

function mapDispatchToProps(dispatch: AppThunkDispatch) {
  return {
    getNews: () => dispatch(getNews()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
