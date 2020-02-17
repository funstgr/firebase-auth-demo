import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import FormField from './index';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<FormField />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('<FormField />', () => {
    it('should render and have <div>', () => {
      expect(output.type).toBe('div');
    });

    it('should render <div> element as first child and have content', () => {
      const firstElement = output.props.children[0];
      expect(firstElement.type).toBe('div');
      expect(firstElement.props.children[0].type).toBe('label');
      expect(firstElement.props.children[0].props.children.type).toBe('span');
      expect(firstElement.props.children[1].type).toBe('input');
      expect(firstElement.props.children[1].props.required).toBe(true);
    });

    it('should render <div> element as second child and have content', () => {
      const secondElement = output.props.children[1];
      expect(secondElement.type).toBe('div');
      expect(secondElement.props.className).toBe('invalid-feedback');
    });
  });
});
