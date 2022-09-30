import { Breadcrumb as BreadcrumbMain } from "./Breadcrumb";
import { BreadcrumbLink } from "./BreadcrumbLink";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { BreadcrumbText } from "./BreadcrumbText";
import { BreadcrumbIcon } from "./BreadcrumbIcon";
import type { IBreadcrumbProps } from "native-base";

let BreadcrumbTemp: any = BreadcrumbMain;
BreadcrumbTemp.Item = BreadcrumbItem;
BreadcrumbTemp.Link = BreadcrumbLink;
BreadcrumbTemp.Text = BreadcrumbText;
BreadcrumbTemp.Icon = BreadcrumbIcon;

// To add typings
const Breadcrumb = BreadcrumbTemp as IBreadcrumbProps;
export { Breadcrumb };
