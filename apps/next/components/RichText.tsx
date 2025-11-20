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
            <p 
              className="max-w-[61ch] text-md sm:text-lg mb-4 leading-8"
            >{children}</p>
          ),
        },
      }}
    />
  );
}
