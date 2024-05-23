import { Container, VStack, Text, Box, Button, IconButton, Image, HStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { useState } from "react";

const videoTemplates = [
  {
    id: 1,
    background: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3MTY0ODg2MjJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    music: "Music Track 1",
  },
  {
    id: 2,
    background: "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxNjQ4ODYyMnww&ixlib=rb-4.0.3&q=80&w=1080",
    music: "Music Track 2",
  },
  {
    id: 3,
    background: "https://images.unsplash.com/photo-1529256879299-f530fa27a9de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzE2NDg4NjIyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    music: "Music Track 3",
  },
];

const Index = () => {
  const [currentTemplate, setCurrentTemplate] = useState(videoTemplates[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTemplateChange = (template) => {
    setCurrentTemplate(template);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Instagram Video Templates</Text>
        <Box width="100%" height="300px" position="relative" bg="gray.200">
          <Image src={currentTemplate.background} alt="Background" objectFit="cover" width="100%" height="100%" />
          <Box position="absolute" bottom="10px" left="10px" color="white">
            <Text fontSize="lg">{currentTemplate.music}</Text>
          </Box>
        </Box>
        <VStack spacing={2}>
          {videoTemplates.map((template) => (
            <Button key={template.id} onClick={() => handleTemplateChange(template)}>
              Template {template.id}
            </Button>
          ))}
        </VStack>
        <HStack spacing={4}>
          <IconButton aria-label="Play/Pause" icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={handlePlayPause} size="lg" />
          <IconButton aria-label="Stop" icon={<FaStop />} onClick={handleStop} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
