/* eslint-disable react-native/no-inline-styles */
// individual project card in messages screen
import './projectcard.css';
import { Avatar, Badge, Card, Typography } from 'antd';
import React from 'react';
const { Title, Text } = Typography;
type Participant = { [key: string]: any };
export interface ProjectCardProps {
  jobTitle: string;
  participants?: Participant[];
  conversations?: number;
  unseenMessages?: number;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { jobTitle, participants, conversations, unseenMessages } = props;
  return (
    <Card className="container">
      <Title level={4} className="title">
        {jobTitle}
      </Title>

      {participants?.length && (
        <div className="avatar-text-container">
          <Avatar.Group
            size="small"
            maxCount={2}
            maxStyle={{ color: '#FFFFFF', backgroundColor: '#4169E0' }}
            className="avatar-group"
          >
            {participants.map((participant) => {
              // if has avatarUri we use image
              // else we use first name initial to capital for avatar
              if (participant.avatarUri)
                return <Avatar src={participant.avatarUri} />;
              return (
                <Avatar style={{ backgroundColor: '#4199' }}>
                  {participant.name.slice(0, 1).toUpperCase()}
                </Avatar>
              );
            })}
          </Avatar.Group>

          {
            // if we have conversations
            // render sting to plural or singular on conversations count
            conversations ? (
              <Text type="secondary" className="conversations-text">
                {conversations}{' '}
                {conversations > 1 ? 'Conversations' : 'Conversation'}
              </Text>
            ) : (
              <Text type="secondary" className="conversations-text">
                No Conversations
              </Text>
            )
          }
        </div>
      )}
      {unseenMessages && (
        <div className="unseenMessages-container">
          <Text disabled>
            {
              // render string to plural or sngular on unseenMessages count
              unseenMessages > 1 ? 'Unseen Messages' : 'Unseen Message'
            }
          </Text>
          <Badge size="small" count={unseenMessages} />
        </div>
      )}
    </Card>
  );
};
