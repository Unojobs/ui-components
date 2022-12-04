export type GetLinkPreviewResponse = {
  url: string;
  title?: string;
  siteName?: string | undefined;
  description?: string | undefined;
  mediaType: string;
  contentType: string | undefined;
  images?: string[];
  videos?: {
    url: string | undefined;
    secureUrl: string | null | undefined;
    type: string | null | undefined;
    width: string | undefined;
    height: string | undefined;
  }[];
  favicons: string[];
};

// {
//     url: string;
//     mediaType: string;
//     contentType: string;
//     favicons: string[];
//   }

export interface TLinkPreviewProps {
  message: string;
}
