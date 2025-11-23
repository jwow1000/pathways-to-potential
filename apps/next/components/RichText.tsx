import { PortableText } from "next-sanity";
import {PortableTextBlock} from '@portabletext/types';


interface RichTextProps {
  value: (PortableTextBlock)[];
  bio?: boolean;
}

export default function RichText( {value, bio=false}: RichTextProps ) {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          normal: ({ children }) => (
            <p 
              className={`max-w-[48ch] md:text-lg mb-4 leading-8 ${bio ? "text-[14px] md:text-[15px] leading-[120%]" : ""}`}
            >{children}</p>
          ),
        },
      }}
    />
  );
}
