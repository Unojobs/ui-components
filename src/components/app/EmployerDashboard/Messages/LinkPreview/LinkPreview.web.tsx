/* eslint-disable no-console */

import { getLinkPreview } from 'link-preview-js';
import React, { useEffect, useState } from 'react';
import { Image, Link, Text, VStack } from '../../../../primitives';
import { urlify } from '../../../../utils';
import { STATIC_PROPS } from './constants';
import type { GetLinkPreviewResponse, TLinkPreviewProps } from './types';

export const LinkPreview = (props: TLinkPreviewProps) => {
  const { message } = props;
  const [urlData, setUrlData] = useState<null | GetLinkPreviewResponse>(null);
  useEffect(() => {
    const url = urlify(message, true) as string;
    (async () => {
      try {
        const previewData = await getLinkPreview(url);
        if (previewData.favicons) {
          setUrlData(previewData);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [message]);
  if (!urlData) return null;
  const src =
    urlData?.images && urlData?.images.length > 0 ? urlData.images[0] : '';
  return (
    <Link maxW="506px" href={urlData.url}>
      <VStack {...STATIC_PROPS.CONTAINER}>
        <Image height="160px" src={src} />
        <Text {...STATIC_PROPS.LINK_TITLE}>{urlData.title}</Text>
        <Text {...STATIC_PROPS.LINK_DESC}>{urlData.description}</Text>
        <Text>{new URL(urlData.url).hostname}</Text>
      </VStack>
    </Link>
  );
};
