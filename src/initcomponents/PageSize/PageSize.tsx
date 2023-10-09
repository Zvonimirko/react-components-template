import { Fragment } from 'react';
import clsx from 'clsx';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const PAGE_SIZES = [25, 50, 100];

export const PageSize = ({ pageSize, pageSizeClicked }: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={clsx(
            'inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm',
            'font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2',
            'focus:ring-offset-2 focus:ring-offset-gray-100',
          )}
        >
          {pageSize}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            'origin-top-right absolute -mt-40 w-32 rounded-md shadow-lg py-1 bg-white',
            'ring-1 ring-black ring-opacity-5 focus:outline-none',
          )}
        >
          <div className="py-1">
            {PAGE_SIZES.map((ps) => {
              return (
                <Menu.Item key={ps}>
                  {({ active }) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                      href="#"
                      onClick={() => pageSizeClicked(ps)}
                      className={clsx(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                    >
                      {ps}
                    </a>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

interface Props {
  pageSize: number;
  pageSizeClicked: (newPageSize: number) => void;
}
