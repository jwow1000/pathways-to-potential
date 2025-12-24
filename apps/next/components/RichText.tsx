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
              className={`max-w-[50ch] text-normal md:text-lg lg:text-xl mb-4 leading-8 ${bio ? "text-[14px] md:text-[15px] lg:text-sm leading-[120%]" : ""}`}
            >{children}</p>
          ),
          h2: ({children}) => (
            <h2 className="text-[28px] md:text-[32px] font-bold my-4">{children}</h2>
          ),
        },
      }}
    />
  );
}
