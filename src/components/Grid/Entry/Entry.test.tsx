import React from 'react';
import { mount } from 'enzyme';

import { TestComponent } from '../../../setupTests';
import Entry from './Entry';

describe('<Entry />', () => {
  it('renders with plain old DOM element child', () => {
    mount(
      <Entry>
        <span>Boom</span>
      </Entry>
    );
  });

  describe('with React component child', () => {
    describe('with default props', () => {
      const wrapper = mount(
        <Entry>
          <TestComponent>Boom</TestComponent>
        </Entry>
      );

      it('renders contents', () => {
        expect(wrapper.find(TestComponent).length).toEqual(1);
        expect(wrapper.text()).toEqual('Boom');
      });
    });

    describe('with `clear` prop', () => {
      describe('boolean true', () => {
        const wrapper = mount(
          <Entry>
            <TestComponent clear>Boom</TestComponent>
          </Entry>
        );

        const firstDiv = wrapper.find('div').at(0);

        it('renders an empty div first', () => {
          expect(firstDiv.text()).toEqual('');
        });
      });

      describe('as "false" string', () => {
        const wrapper = mount(
          <Entry>
            <TestComponent clear="false">Boom</TestComponent>
          </Entry>
        );

        const firstDiv = wrapper.find('div').at(0);

        it("doesn't render an empty div first", () => {
          expect(firstDiv.text()).toEqual('Boom');
        });
      });
    });
  });
});
