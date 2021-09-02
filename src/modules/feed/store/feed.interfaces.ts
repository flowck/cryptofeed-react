export interface FeedModuleState {
  news: News[];
}

export interface News {
  description: string;
  category: string;
  created_at: string;
  user: null;
  user_title: string;
  pin: boolean;
  project: Project;
}

export interface Project {
  type: string;
  id: string;
  name: string;
  symbol: string;
  image: Image;
}

export interface Image {
  thumb: string;
  small: string;
  large: string;
}
