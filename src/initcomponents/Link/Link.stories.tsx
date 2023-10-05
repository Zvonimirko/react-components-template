import { MemoryRouter } from 'react-router-dom';
import { StoryDecorator } from '@ladle/react';
import { Link as BaseLink } from './Link';

export default {
  title: 'Links',
  decorators: [
    (Component) => (
      <MemoryRouter>
        <Component />
      </MemoryRouter>
    ),
  ] as StoryDecorator[],
};

export const Link = () => {
  return (
    <div className="flex flex-col gap-2">
      <BaseLink to="http://google.com" external target="_blank" className="text-blue-500">
        External Link
      </BaseLink>
      <BaseLink to="/sing-in" className="text-red-500">
        Internal Link
      </BaseLink>
    </div>
  );
};
