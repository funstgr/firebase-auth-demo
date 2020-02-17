import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import AddReview from './index';
import FormField from '../FormField';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<AddReview />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('<AddReview />', () => {
    it('should have class container', () => {
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('add-review-nav');
    });
  });
});

const innerContent = output.props.children;
describe('components', () => {
  describe('child as div', () => {
    it('should render', () => {
      expect(innerContent.type).toBe('div');
      expect(innerContent.props.className).toBe('add-review');
    });
  });
});

const form = output.props.children.props.children[1];

describe('components', () => {
  describe('form', () => {
    it('should render', () => {
      expect(form.type).toBe('form');
      expect(form.props.className).toBe('form form-review');
    });
  });
});

describe('components', () => {
  describe('form first child', () => {
    it('should render', () => {
      const firstChild = form.props.children[0];
      expect(firstChild.type).toBe(FormField);
      expect(firstChild.props.idValue).toBe('add-review-comment');
      expect(firstChild.props.wrapperClass).toBe('form-group display');
      expect(firstChild.props.divClass).toBe('form-field');
      expect(firstChild.props.inputClass).toBe('form-input');
      expect(firstChild.props.inputError).toBe('');
      expect(firstChild.props.inputType).toBe('text');
      expect(firstChild.props.spanClass).toBe('hidden');
      expect(firstChild.props.labelClass).toBe('user');
      expect(firstChild.props.value).toBe('comment');
    });
  });
});

describe('components', () => {
  describe('form second child', () => {
    it('should render', () => {
      const secondChild = form.props.children[1];
      expect(secondChild.type).toBe(FormField);
      expect(secondChild.props.idValue).toBe('add-review-rating');
      expect(secondChild.props.wrapperClass).toBe('form-group display');
      expect(secondChild.props.divClass).toBe('form-field');
      expect(secondChild.props.inputClass).toBe('form-input');
      expect(secondChild.props.inputError).toBe('');
      expect(secondChild.props.inputType).toBe('text');
      expect(secondChild.props.spanClass).toBe('hidden');
      expect(secondChild.props.labelClass).toBe('user');
      expect(secondChild.props.value).toBe('rating');
    });
  });
});

describe('components', () => {
  describe('form third child', () => {
    it('should render', () => {
      const thirdChild = form.props.children[2];
      expect(thirdChild.type).toBe('div');
      expect(thirdChild.props.className).toBe('form-field button');
      const thirdChildChild = thirdChild.props.children;
      expect(thirdChildChild.type).toBe('input');
      expect(thirdChildChild.props.type).toBe('submit');
      expect(thirdChildChild.props.value).toBe('Add Review');
    });
  });
});

describe('components', () => {
  describe('form forth child', () => {
    it('should render', () => {
      const forthChild = form.props.children[3];
      expect(forthChild.type).toBe('br');
    });
  });
});
