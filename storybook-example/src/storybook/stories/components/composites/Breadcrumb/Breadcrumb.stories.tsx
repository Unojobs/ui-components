
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Breadcrumb.args";

  import React from 'react';
import { Breadcrumb, Box, Heading } from 'components';
export const Example = () => {
  return (
    <Box>
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
    </Box>
  );
};


  const BreadcrumbTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const BreadcrumbComponent = BreadcrumbTest.bind({});
  
  export default {
    title: "composites/Breadcrumb",
    component: BreadcrumbComponent,
    argTypes: StorybookArgs,
  };
  