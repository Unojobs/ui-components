export interface IListItem {
  title?: string;
  subTitle?: string;
  imageUrl?: string;
}

export interface ILeftSideScreenProps {
  list?: IListItem[];
  infiniteLoop?: boolean;
  autoPlay?: boolean;
  showArrows?: boolean;
  interval?: number;
  showThumbs?: boolean;
}
