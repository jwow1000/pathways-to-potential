import { PortableText } from "next-sanity";
import {PortableTextBlock} from '@portabletext/types';


interface RichTextProps {
  value: (PortableTextBlock)[];
}

export default function RichText( {value}: RichTextProps ) {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          normal: ({ children }) => (
            <p style={{lineHeight: '140%', marginBottom: '1rem', textAlign: 'left'}}>{children}</p>
          ),
        },
      }}
    />
  );
}
