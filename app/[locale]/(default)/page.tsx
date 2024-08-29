// import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import Head from 'next/head';
// import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { getSessionCustomerId } from '~/auth';
import { client } from '~/client';
import { graphql } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';
// import { Hero } from '~/components/hero';
import { DiscoverBlock } from '~/components/discover-block';
import { ImageSlider } from '~/components/image-slider';
import { Link } from '~/components/link';
import {
  // ProductCardCarousel,
  ProductCardCarouselFragment,
} from '~/components/product-card-carousel';
import { LocaleType } from '~/i18n';

interface Props {
  params: {
    locale: LocaleType;
  };
}

const HomePageQuery = graphql(
  `
    query HomePageQuery {
      site {
        newestProducts(first: 12) {
          edges {
            node {
              ...ProductCardCarouselFragment
            }
          }
        }
        featuredProducts(first: 12) {
          edges {
            node {
              ...ProductCardCarouselFragment
            }
          }
        }
      }
    }
  `,
  [ProductCardCarouselFragment],
);

export default async function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const customerId = await getSessionCustomerId();

  const t = await getTranslations({ locale, namespace: 'Home' });
  const messages = await getMessages({ locale });

  const { data } = await client.fetch({
    document: HomePageQuery,
    customerId,
    fetchOptions: customerId ? { cache: 'no-store' } : { next: { revalidate } },
  });

  // const featuredProducts = removeEdgesAndNodes(data.site.featuredProducts);
  // const newestProducts = removeEdgesAndNodes(data.site.newestProducts);

  return (
    <>
      <Head>
        <meta name="description" content="Handmade oboe reeds, cane, and accessories" />
      </Head>
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full p-4 md:w-3/4">
          <h2 className="pb-4 text-3xl">Handmade oboe reeds, cane, and accessories</h2>
          <p className="text-2xl">About us 👋</p>
          <p className="pt-5 text-lg">
            We are oboists{' '}
            <Link href="https://www.matthewshippoboe.com/">
              <b>Matthew Shipp</b>
            </Link>{' '}
            and
            <Link href="https://adotterer.com">
              <b> Andrew Dotterer</b>
            </Link>
            , welcome to our reed shop!
          </p>
          <p className="pt-5 text-lg">
            Our extensive experience playing in professional orchestras has allowed us to cultivate
            a deep understanding of which qualities are most desirable in our reeds. We strive to
            provide quality reeds for all needs that play comfortably, in tune, and with a beautiful
            sound. We know that every oboist has unique requirements, which is why we offer a range
            of reeds to suit different needs—from practice sessions to high-stakes performances.
          </p>
          <p className="pt-5 text-lg">
            Trust in our expertise and passion for music to provide you with reeds that enhance your
            playing experience.
          </p>
        </div>
        <div className="p-4 md:w-1/2">
          <ImageSlider />
        </div>
      </div>
      <div className="mb-8 flex flex-col items-center justify-center gap-2 bg-gray-100 px-8 py-8">
        <div className="flex rounded-lg bg-white p-6 shadow-lg">
          <div className="">
            <h3 className="text-2xl font-bold text-gray-900">Now accepting pre orders! </h3>
          </div>
        </div>
        <div className="flex-col rounded-lg bg-white p-6 shadow-lg">
          <div className="">
            <h3 className="text-2xl font-bold text-gray-900">
              Starting shipments <b>July 15th</b>
            </h3>
          </div>
        </div>
        <div className="flex-col rounded-lg bg-white p-6 shadow-lg">
          <div className="">
            <h3 className="text-2xl font-bold text-gray-900">
              Orders will be fulfilled in the order they are received.
            </h3>
          </div>
        </div>
      </div>

      <DiscoverBlock />
    </>
  );
}

export const runtime = 'edge';
