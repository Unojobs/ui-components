/* eslint-disable react-native/no-inline-styles */
// list component for projectCard/CandidateCard
import './cardlist.css';
import React, { useEffect } from 'react';
import { Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CandidateCard, CandidateCardProps } from '../CandidateCard';
import { ProjectCard, ProjectCardProps } from '../ProjectCard';

type Cards = CandidateCardProps | ProjectCardProps;

export interface CardListProps {
  listType: 'jobs' | 'candidates';
  items: Cards[];
}
export const CardList = (props: CardListProps) => {
  const { listType, items } = props;

  // uncomment when we are get
  // data dynamically from api
  // const [data, setData] = useState<Cards[]>([]);

  const loadMoreData = () => {
    // fetch more data from api
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 741,
        width: 370,
        padding: 16,
        borderRadius: 12,
        overflow: 'auto',
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
            <List.Item key={idx}>
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
};
