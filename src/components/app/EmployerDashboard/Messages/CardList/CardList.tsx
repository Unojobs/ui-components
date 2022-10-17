/* eslint-disable react-native/no-inline-styles */
// list component for projectCard/CandidateCard
import './cardlist.css';
import React, { useEffect } from 'react';
import { Divider, List, Skeleton, Typography } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CandidateCard, CandidateCardProps } from '../CandidateCard';
import { ProjectCard, ProjectCardProps } from '../ProjectCard';
import { Center } from 'src/components/composites';

type Cards = CandidateCardProps | ProjectCardProps;
export interface CardListProps {
  listType: 'jobs' | 'candidates';
  items: Cards[];
}
const { Text } = Typography;

export const CardList = (props: CardListProps) => {
  const { listType, items } = props;

  // uncomment when we get
  // data dynamically from api
  // const [data, setData] = useState<Cards[]>([]);

  const loadMoreData = () => {
    // fetch more data from api
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const setActiveItem = (idx: number) => {
    return idx;
  };

  if (!items.length) {
    return (
      <div
        id="scrollableDiv"
        style={{
          height: 741,
          width: 370,
          padding: 16,
          borderRadius: 12,
          overflow: 'auto',
          backgroundColor: '#FAFAFA',
        }}
      >
        <Center>
          <Text disabled>
            {listType === 'jobs' ? 'Post a job.' : 'Start a conversation.'}
          </Text>
        </Center>
      </div>
    );
  }

  if (items.length) {
    return (
      <div
        id="scrollableDiv"
        style={{
          height: 741,
          width: 370,
          padding: 16,
          borderRadius: 12,
          overflow: 'auto',
          backgroundColor: '#FAFAFA',
        }}
      >
        <InfiniteScroll
          dataLength={items.length}
          next={loadMoreData}
          hasMore={items.length < 10}
          endMessage={<Divider plain>All Done</Divider>}
          scrollableTarget="scrollableDiv"
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        >
          <List
            dataSource={items}
            renderItem={(item, idx) => (
              <List.Item key={idx} onClick={() => setActiveItem(idx)}>
                {listType === 'jobs' ? (
                  <ProjectCard {...(item as unknown as ProjectCardProps)} />
                ) : (
                  <CandidateCard {...(item as unknown as CandidateCardProps)} />
                )}
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    );
  }

  return null;
};
