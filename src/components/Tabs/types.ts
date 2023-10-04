export interface TabProps {
  children: React.ReactNode;
  isSelected?: boolean;
  tabClassName?: string;
  activeTabClassName?: string;
  onTabClick?: () => void;
}

export interface TabsProps {
  children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
  selectedTab?: number;
  containerClassName?: string;
  navClassName?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  onTabClick?: (index: number) => void;
}
