import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === '/videos') return null;

  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="8" color={'whiteAlpha.700'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'50%'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        {/* <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights received</Text>
        </VStack> */}

        <VStack w={'full'} align={'flex-end'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            alignContent={['center', 'right']}
          >
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <AiFillYoutube />
            <a target={'black'} href="https://youtube.com/nba">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <AiFillInstagram />
            <a target={'black'} href="https://instagram.com/nba" px="4">
              Instagram
            </a>
          </Button>

          {/* <Button variant={'link'} colorScheme={'white'}>
            <AiFillGithub />
            <a target={'black'} href="https://github.com/meabhisingh">
              Github
            </a>
          </Button> */}
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
