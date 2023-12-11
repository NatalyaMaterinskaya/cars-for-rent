import { Box, Flex } from "@chakra-ui/react";

const HomePage = () => {
  const basicBoxStyles = {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    textAlign: "center",
    boxSize: "100vh",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "100px",
    px: 4,
    background:
      "url(https://fastly.picsum.photos/id/757/5000/2924.jpg?hmac=4We2FGSD4qjJMZ05Z0HXlVnTVk3CG25cbYGYSvge_ao) center/cover no-repeat",
  };
  return (
    <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
      <Box sx={basicBoxStyles} filter="grayscale(80%)">
        Car for rent
      </Box>
    </Flex>
  );
};

export default HomePage;
