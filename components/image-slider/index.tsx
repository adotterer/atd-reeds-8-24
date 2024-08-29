import { Slideshow } from '../ui/slideshow';

const slides = [
  {
    description: '',
    image: {
      src: 'https://mshippoboe.s3.us-west-1.amazonaws.com/hp-p.png',
      alt: 'Andrew, Matt, and Rosie on a camping trip in Washington',
    },
    key: 1,
    title: '',
  },
  {
    description: '',
    image: {
      src: 'https://mshippoboe.s3.us-west-1.amazonaws.com/cg.jpeg',
      alt: "Andrew and Matt perform Stravinsky's Symphony of Psalms with colleagues from The Philadelphia Orchestra",
    },
    key: 2,
    title: '',
  },
  {
    description: '',
    image: {
      src: 'https://mshippoboe.s3.us-west-1.amazonaws.com/philorch3.jpeg',
      alt: 'Matt performs Mahler Symphony No. 1 with The Philadelphia Orchestra',
    },
    key: 3,
    title: '',
  },
  {
    description: '',
    image: {
      src: 'https://mshippoboe.s3.us-west-1.amazonaws.com/orchestra-iowa.jpeg',
      alt: 'Andrew performs Brahms Violin Concerto with Orchestra Iowa',
    },
    key: 4,
    title: '',
  },
  {
    description: '',
    image: {
      src: 'https://mshippoboe.s3.us-west-1.amazonaws.com/image_5_phil_orch_section_1.jpg',
      alt: "Matt performs Dvorak's Symphony No. 9 'From the New World' with The Philadelphia Orchestra",
    },
    key: 5,
    title: '',
  },
  {
    description: '',
    image: {
      src: 'https://mshippoboe.s3.us-west-1.amazonaws.com/image_9_phil_orch4.jpeg',
      alt: 'Matt performs Strauss An Alpine Symphony with The Philadelphia Orchestra at Carnegie Hall',
    },
    key: 6,
    title: '',
  },
  {
    description: '',
    image: {
      src: 'https://mshippoboe.s3.us-west-1.amazonaws.com/orchestra-iowa-bw.jpeg',
      alt: 'Andrew performs Tchaikovsky Violin Concerto with Orchestra Iowa',
    },
    key: 7,
    title: '',
  },
];

export const ImageSlider = () => (
  <Slideshow controlsVisible={false} interval={3000} slides={slides} />
);
