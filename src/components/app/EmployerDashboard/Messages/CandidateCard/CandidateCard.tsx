/* eslint-disable react-native/no-inline-styles */
// individual candidate card in message screen
import './candidatecard.css';
import React from 'react';
import { Avatar, Card, Typography } from 'antd';
const { Title, Text } = Typography;
type PersonInfo = { [key: string]: any };
type DateTime = { date: any; timestamp: any };
export interface CandidateCardProps {
  candidate: PersonInfo;
  latestMessage?: string;
  jobTitle: string;
  dateTime: DateTime;
}
export const CandidateCard = (props: CandidateCardProps) => {
  const { candidate, latestMessage, jobTitle, dateTime } = props;
  return (
    <Card className="container">
      <div className="inner-container">
        <div style={{ marginRight: 10 }}>
          {candidate?.avatarUri ? (
            <Avatar size={52} src={candidate.avatarUri} />
          ) : (
            <Avatar className="avatar-text">
              {candidate.name.slice(0, 1).toUpperCase()}
            </Avatar>
          )}
        </div>
        <div className="data-container">
          <div className="name-message-container">
            <Title level={4} style={{ margin: 0, padding: 0 }}>
              {candidate.name}
            </Title>
            <Text type="secondary" className="latest-message-text">
              {latestMessage ? latestMessage : 'No messages'}
            </Text>
          </div>
          <Text keyboard className="job-text">
            Job: {jobTitle}
          </Text>
          <div>
            <Text type="secondary" className="date-text">
              {dateTime.date}
            </Text>
            <Text type="secondary" className="time-text">
              {dateTime.timestamp}
            </Text>
          </div>
        </div>
      </div>
    </Card>
  );
};
