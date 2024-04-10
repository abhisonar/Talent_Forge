import { RouteLabelEnum, RouteLinkEnum } from "@libs/resources/enum/route.enum";

const MAIN_MENUS = [
  {
    label: RouteLabelEnum.FEED,
    link: RouteLinkEnum.FEED,
    hasSubMenu: false,
  },
  {
    label: RouteLabelEnum.JOBS,
    link: RouteLinkEnum.JOBS,
    hasSubMenu: false,
  },
  {
    label: RouteLabelEnum.MY_APPLICATION,
    link: RouteLinkEnum.MY_APPLICATION,
    hasSubMenu: false,
  },
  {
    label: RouteLabelEnum.PORTFOLIO,
    link: RouteLinkEnum.PORTFOLIO,
    hasSubMenu: false,
  },
  {
    label: RouteLabelEnum.PREFERENCES,
    link: RouteLinkEnum.PREFERENCES,
    hasSubMenu: false,
  },
];

export { MAIN_MENUS };
