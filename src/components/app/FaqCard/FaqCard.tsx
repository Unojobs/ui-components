import React from 'react';
import { Collapse } from '../../composites';
import { Text } from '../../primitives';
import { UpArrowRoundIcon, DownArrowRoundIcon } from '../Icons';
import type { FaqCardProps } from './types';
// import './style.css';

export const FaqCard = (props: FaqCardProps): JSX.Element => {
  const { title, description } = props;
  const [show, setShow] = React.useState(false);

  return (
    <div className="faqCard-box" onClick={() => setShow(!show)}>
      <div className="faqCard-question">
        <Text fontWeight={600}>{title}</Text>
        {show ? <DownArrowRoundIcon /> : <UpArrowRoundIcon />}
      </div>
      <Collapse isOpen={show}>
        <Text color="#707070" mt={2}>
          {description}
        </Text>
      </Collapse>
    </div>
  );
};

FaqCard.defaultProps = {
  title: 'This is faq card question ?',
  description: 'This is faq card answer',
};
