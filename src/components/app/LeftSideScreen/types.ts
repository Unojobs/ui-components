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
  carouselTopMargin: IWidthProps | string | number;
  boxWidth: IWidthProps | string | number;
  imageBorderRadius: string | number;
  imageHeight: IWidthProps | string | number;
  boxPadding: string | number;
  showIndicators: boolean;
}

interface IWidthProps {
  'base': string | number;
  'sm': string | number;
  'md': string | number;
  'lg': string | number;
  'xl': string | number;
  '2xl': string | number;
}
