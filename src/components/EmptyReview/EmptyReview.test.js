import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import EmptyReview from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<EmptyReview />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('<EmptyReview />', () => {
    it('should render and have <li>', () => {
      expect(output.type).toBe('li');
      expect(output.props.className).toBe('review');
    });

    it('should render <div> first child and content', () => {
      const firstElement = output.props.children;
      expect(firstElement.type).toBe('div');
      expect(firstElement.props.className).toBe('empty-review');
      expect(firstElement.props.children).toBe(undefined);
    });
  });
});
