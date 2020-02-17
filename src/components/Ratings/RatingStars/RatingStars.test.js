import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import RatingsStars from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<RatingsStars />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('<RatingsStars />', () => {
    it('should render and have <span>', () => {
      expect(output.type).toBe('span');
    });
  });
});
