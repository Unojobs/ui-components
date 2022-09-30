import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Breadcrumb.args';

import React from 'react';
import { Breadcrumb, Heading } from 'components';

const BreadcrumbTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Heading mb={4}>Default Breadcrumb</Heading>
      <Breadcrumb>
        <Breadcrumb.Item isCurrent>
          <Breadcrumb.Link href="https://github.com/GeekyAnts/nativebase">
            <Breadcrumb.Text _current={{ color: 'red.500' }}>
              Home (This is currently active)
            </Breadcrumb.Text>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://alpha.nativebase.io/" isExternal>
            <Breadcrumb.Text>Docs</Breadcrumb.Text>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="https://github.com/GeekyAnts/nativebase"
            isExternal
          >
            <Breadcrumb.Text>Github</Breadcrumb.Text>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Wrapper>
  );
};

export const BreadcrumbComponent = BreadcrumbTest.bind({});

export default {
  title: 'composites/Breadcrumb',
  component: BreadcrumbComponent,
  argTypes: StorybookArgs,
};
