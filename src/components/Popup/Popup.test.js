import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import Popup from './index';

const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<Popup />);
  const output = renderer.getRenderOutput();
  return output;
};


const output = setup();

describe('<Popup />', () => {
  describe('should render Popup', () => {
    it('should render <div> element', () => {
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('popup');
    });
  });
});

describe('components', () => {
  describe('first child div', () => {
    it('should render <div>', () => {
      const innerPopup = output.props.children;
      expect(innerPopup.type).toBe('div');
    });
  });
});

describe('components', () => {
  describe('children of firstchild', () => {
    it('should render div h1 and button to close', () => {
      const innerPopup = output.props.children;
      const ipFirstChild = innerPopup.props.children[0];
      expect(ipFirstChild.type).toBe('div');
      expect(ipFirstChild.props.className).toBe('pu-header');

      const ipSecondChild = innerPopup.props.children[1];
      expect(ipSecondChild.type).toBe('h1');
      expect(ipSecondChild.props.className).toBe('pu-message red');

      const ipThirdChild = innerPopup.props.children[2];
      expect(ipThirdChild.type).toBe('button');
      expect(ipThirdChild.props.className).toBe('pu-button');
      expect(ipThirdChild.props.onClick).toBe(undefined);
    });
  });
});
