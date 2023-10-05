import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TabProps } from './types';

export const Tab = ({ children, tabClassName, activeTabClassName, isSelected, onTabClick }: TabProps) => {
  return (
    <a
      href="#/"
      onClick={onTabClick}
      className={twMerge(
        clsx(
          'py-4 px-1 text-center border-b-2 font-medium text-sm w-full border-transparent',
          'text-gray-500 hover:text-gray-700 hover:border-gray-300',
          tabClassName,
          { [`border-indigo-500 text-indigo-600 ${activeTabClassName}`]: isSelected },
        ),
      )}
      aria-current={isSelected ? 'page' : undefined}
    >
      {children}
    </a>
  );
};
