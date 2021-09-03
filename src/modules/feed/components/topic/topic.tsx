import "./topic.scss";
import dayjs from "dayjs";
import { News } from "../../store/feed.interfaces";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface Props {
  news: News;
}

function renderDate(date: string): string {
  return dayjs(date).fromNow();
}

export function Topic({ news }: Props) {
  return (
    <article className="topic">
      <header className="topic__header is-flex is-flex--vertical-center">
        <img src={news.project.image.thumb} alt={news.project.name} />
        <span>{news.project.name}</span>
      </header>

      <div className="topic__content">{news.description}</div>

      <footer className="topic__footer is-flex">
        <span>{news.category}</span>
        <span>{renderDate(news.created_at)}</span>
        <span>{news.user ? `By ${news.user} (${news.user_title})` : null}</span>
      </footer>
    </article>
  );
}
