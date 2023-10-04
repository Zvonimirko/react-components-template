import clsx from 'clsx';
import React, { Children, cloneElement, ReactElement, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { TabProps, TabsProps } from './types';

export const Tabs = ({
  children,
  selectedTab,
  containerClassName,
  navClassName,
  tabClassName,
  activeTabClassName,
  onTabClick,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const click = (index: number) => {
    setActiveTab(index);
    if (onTabClick) onTabClick(index);
  };

  const isSelected = (index: number) => {
    if (selectedTab) {
      return index === selectedTab;
    }

    return index === activeTab;
  };

  return (
    <div
      className={twMerge(clsx('border-b border-gray-200', containerClassName))}
    >
      <nav
        className={twMerge(clsx('-mb-px flex', navClassName))}
        aria-label="Tabs"
      >
        {Children.map(children, (child: ReactElement<TabProps>, index) => {
          return cloneElement(child, {
            isSelected: isSelected(index),
            tabClassName: child.props.tabClassName ?? tabClassName,
            activeTabClassName:
              child.props.activeTabClassName ?? activeTabClassName,
            onTabClick: () => click(index),
          });
        })}
      </nav>
    </div>
  );
};
