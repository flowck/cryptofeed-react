export interface FeedModuleState {
  news: News[];
  categories: Category[];
  resources: Resource[];
}

export interface Resource {
  name: string;
  label: string;
}

export interface Category {
  name: string;
  label: string;
}

export interface ProjectS {
  id: string;
  name: string;
  type: ProjectType;
}

enum PROJECT_TYPE {
  COINS = "COINS",
  EXCHANGES = "EXCHANGES",
}

type ProjectType = PROJECT_TYPE.COINS | PROJECT_TYPE.EXCHANGES;

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
