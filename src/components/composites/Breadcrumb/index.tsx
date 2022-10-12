import { Breadcrumb as BreadcrumbMain } from './Breadcrumb';
import { BreadcrumbLink } from './BreadcrumbLink';
import { BreadcrumbItem } from './BreadcrumbItem';
import { BreadcrumbText } from './BreadcrumbText';
import { BreadcrumbIcon } from './BreadcrumbIcon';
import type { IBreadcrumbProps } from 'native-base';

let BreadcrumbTemp: any = BreadcrumbMain;
BreadcrumbTemp.Item = BreadcrumbItem;
BreadcrumbTemp.Link = BreadcrumbLink;
BreadcrumbTemp.Text = BreadcrumbText;
BreadcrumbTemp.Icon = BreadcrumbIcon;

// @ts-ignore
BreadcrumbItem.displayName = 'Breadcrumb.Item';
// @ts-ignore
BreadcrumbLink.displayName = 'Breadcrumb.Link';
// @ts-ignore
BreadcrumbText.displayName = 'Breadcrumb.Text';
// @ts-ignore
BreadcrumbIcon.displyName = 'Breadcrumb.Icon';
// To add typings
const Breadcrumb: any = BreadcrumbTemp as IBreadcrumbProps;
export { Breadcrumb };
