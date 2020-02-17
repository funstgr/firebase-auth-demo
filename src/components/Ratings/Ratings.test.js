import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import Ratings from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<Ratings />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('<Ratings>', () => {
    it('should render and have <div>', () => {
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('ratings-container');
    });
  });
});
