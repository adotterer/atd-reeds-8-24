import Image from 'next/image';

import { FragmentOf, graphql } from '~/client/graphql';

import { BcImage } from '../bc-image';
import Logo from '../bt-250.png';

export const StoreLogoFragment = graphql(`
  fragment StoreLogoFragment on Settings {
    storeName
    logoV2 {
      __typename
      ... on StoreTextLogo {
        text
      }
      ... on StoreImageLogo {
        image {
          url: urlTemplate
          altText
        }
      }
    }
  }
`);

interface Props {
  data: FragmentOf<typeof StoreLogoFragment>;
}

export const StoreLogo = ({ data }: Props) => {
  const { logoV2: logo, storeName } = data;

  if (logo.__typename === 'StoreTextLogo') {
    return (
      <div className="flex items-center object-contain">
        <Image
          alt="Boston terrier profile"
          // className="opacity-50"
          height={75}
          priority
          src={Logo}
          width={75}
        />
        <span className="text-lg font-black md:text-2xl">{logo.text}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center object-contain">
      <Image
        alt="Boston terrier profile"
        // className="opacity-50"
        height={75}
        priority
        src={Logo}
        width={75}
      />

      <span className="text-lg font-black md:text-2xl">{logo.text}</span>
    </div>
  );
};
