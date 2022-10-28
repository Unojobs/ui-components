import React from 'react';
import { DashboardTableWrapper } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../Wrapper';
import type { ColumnsType } from 'antd/es/table';

import { Table } from 'antd';

export default {
  title: 'DashboardTableWrapper',
  component: DashboardTableWrapper,
} as ComponentMeta<typeof DashboardTableWrapper>;

const dataSource = [
  {
    key: 0,
    monthlyDataPoints: 'Total Employers Registered 0',
    description: 'YTD',
    january: 803,
    february: 71,
    march: 537,
    april: 1,
    may: 13,
    june: 421,
    july: 469,
    august: 861,
    september: 92,
    october: 906,
    november: 737,
    december: 197,
  },
  {
    key: 1,
    monthlyDataPoints: 'Total Employers Registered 1',
    description: 'Monthly',
    january: 760,
    february: 439,
    march: 345,
    april: 446,
    may: 625,
    june: 28,
    july: 157,
    august: 34,
    september: 744,
    october: 689,
    november: 694,
    december: 558,
  },
  {
    key: 2,
    monthlyDataPoints: 'Total Employers Registered 2',
    description: 'Monthly',
    january: 700,
    february: 546,
    march: 154,
    april: 613,
    may: 624,
    june: 480,
    july: 632,
    august: 947,
    september: 204,
    october: 766,
    november: 691,
    december: 467,
  },
  {
    key: 3,
    monthlyDataPoints: 'Total Employers Registered 3',
    description: 'Monthly',
    january: 40,
    february: 491,
    march: 503,
    april: 968,
    may: 787,
    june: 535,
    july: 728,
    august: 726,
    september: 437,
    october: 722,
    november: 782,
    december: 683,
  },
  {
    key: 4,
    monthlyDataPoints: 'Total Employers Registered 4',
    description: 'Monthly',
    january: 483,
    february: 850,
    march: 174,
    april: 448,
    may: 590,
    june: 432,
    july: 370,
    august: 270,
    september: 369,
    october: 657,
    november: 738,
    december: 592,
  },
  {
    key: 5,
    monthlyDataPoints: 'Total Employers Registered 5',
    description: 'Monthly',
    january: 897,
    february: 603,
    march: 493,
    april: 392,
    may: 873,
    june: 690,
    july: 240,
    august: 896,
    september: 704,
    october: 58,
    november: 539,
    december: 228,
  },
];

const columns: ColumnsType<any> = [
  {
    title: 'Monthly data points',
    width: 260,
    dataIndex: 'monthlyDataPoints',
    key: 'monthlyDataPoints',
    fixed: 'left',
  },
  {
    title: 'Description',
    width: 150,
    dataIndex: 'description',
    key: 'description',
    fixed: 'left',
  },
  {
    title: 'January',
    dataIndex: 'january',
    key: '0',
    width: 150,
  },
  {
    title: 'February',
    dataIndex: 'february',
    key: '1',
    width: 150,
  },
  {
    title: 'March',
    dataIndex: 'march',
    key: '2',
    width: 150,
  },
  {
    title: 'April',
    dataIndex: 'april',
    key: '3',
    width: 150,
  },
  {
    title: 'May',
    dataIndex: 'may',
    key: '4',
    width: 150,
  },
  {
    title: 'June',
    dataIndex: 'june',
    key: '5',
    width: 150,
  },
  {
    title: 'July',
    dataIndex: 'july',
    key: '6',
    width: 150,
  },
  {
    title: 'August',
    dataIndex: 'august',
    key: '7',
    width: 150,
  },
  {
    title: 'September',
    dataIndex: 'september',
    key: '8',
    width: 150,
  },
  {
    title: 'October',
    dataIndex: 'october',
    key: '9',
    width: 150,
  },
];

const Template: ComponentStory<typeof DashboardTableWrapper> = (args) => (
  <Wrapper>
    <DashboardTableWrapper {...args}>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{
          x: '1500px',
          y: 'calc(73vh)',
        }}
      />
    </DashboardTableWrapper>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {};
