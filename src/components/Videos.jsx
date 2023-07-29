import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import game1 from '../assets/game1.mp4';
import game2 from '../assets/game2.mp4';
import game3 from '../assets/game3.mp4';
import game4 from '../assets/game4.mp4';
import game5 from '../assets/game5.mp4';

let ind = 0;

const Videos = () => {
  const videosArr = [game1, game2, game3, game4, game5];
  const scoreArr = ['104-93', '108-111', '109-94', '108-95', '94-89'];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Full Game {ind + 1} highlights</Heading>
          <Text>
            This is a sample video for testing and demo. This is called
            description.
          </Text>
        </VStack>
      </VStack>

      <VStack
        w={['full', 'xl']}
        h={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            size={'lg'}
            alignItems={'stretch'}
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Game {index + 1} <br></br> {scoreArr[index]}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
