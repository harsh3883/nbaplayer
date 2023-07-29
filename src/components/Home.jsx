import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Denver Nuggets vs Miami Heats
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            The <b>2023 NBA Finals</b> was the championship series of the
            National Basketball Association (NBA)'s 2022-23 season and
            conclusion to the season's playoffs. The best-of-seven playoffs was
            played between the Eastern Conference champion Miami Heat and the
            Western Conference champion Denver Nuggets. The series started on
            June 1, and concluded in a <b>Denver victory</b> on June 12.The
            Nuggets defeated the Heat in four of five games, winning their{' '}
            <b>first championship </b>in franchise history after 47 seasons in
            the NBA. Denver's<b> Nikola Jokić </b>was unanimously voted the NBA
            Finals Most Valuable Player (MVP), after averaging{' '}
            <b>
              30.2 points, 14.0 rebounds, 7.2 assists, and 1.4 blocks while
              shooting 58.3% from the field and 42.1% from the 3-point line
            </b>
            . Jokić is the lowest-selected player to ever win Finals MVP, being
            the 41st pick of the 2014 NBA draft. This marked the first NBA
            Finals appearance for Denver. This was also the second Finals to
            feature a No. 8 seed, along with the 1999 NBA Finals.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1500}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
    </Box>
  </Carousel>
);

export default Home;
