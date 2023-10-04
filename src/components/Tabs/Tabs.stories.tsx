import { Tabs as BaseTabs } from './Tabs';
import { Tab } from './Tab';
import React from 'react';

export const Tabs = () => {
  return (
    <div className="flex flex-col gap-2">
      <BaseTabs>
        <Tab>
          <p>Test</p>
        </Tab>
        <Tab>
          <p>Test 2</p>
        </Tab>
      </BaseTabs>
    </div>
  );
};
