import { News } from "../../store/feed.interfaces";

interface Props {
  news: News;
}

export function Topic({ news }: Props) {
  return (
    <article className="topic">
      <header className="topic__header">
        <span>{news.category}</span>
        <span>{news.created_at}</span>
        <span>{news.user ? `By ${news.user} (${news.user_title})` : null}</span>
      </header>
      <blockquote>{news.description}</blockquote>
    </article>
  );
}
