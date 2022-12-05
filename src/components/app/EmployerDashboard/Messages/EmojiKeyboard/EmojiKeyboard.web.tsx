import { SmileOutlined } from '@ant-design/icons';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import React, { useState } from 'react';
import { CustomNBButton } from '../../../CustomNBButton';
import { STATIC_PROPS } from './constant';
import type { IEmojiKeyboardProps } from './types';

export const EmojiKeyboard = (props: IEmojiKeyboardProps) => {
  const { setValue, value } = props;
  const [showEmoji, SetShowEmoji] = useState(false);
  const handleSelect = (event: EmojiClickData) => {
    const emoji = event.emoji;
    const newValue = value + emoji;
    setValue(newValue);
    SetShowEmoji((prev) => !prev);
  };
  return (
    <div style={{ ...STATIC_PROPS.CONTAINER }}>
      <CustomNBButton
        {...STATIC_PROPS.EMOJI_BUTTON}
        onClick={(_event) => SetShowEmoji((prev) => !prev)}
      >
        {showEmoji && (
          <div style={{ ...STATIC_PROPS.EMOJI_PICKER }}>
            <EmojiPicker
              width="300px"
              height="300px"
              previewConfig={{ showPreview: false }}
              onEmojiClick={handleSelect}
            />
          </div>
        )}
        <SmileOutlined />
      </CustomNBButton>
    </div>
  );
};
