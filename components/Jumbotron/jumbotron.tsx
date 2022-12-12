import { Col, Row, Text, Image, Spacer } from "@nextui-org/react";

export const Jumbotron = () => {
  return (
    <>
      <Spacer />
      <Row gap={0} color="white" fluid>
        <Image
          objectFit="cover"
          width={"100%"}
          css={{
            borderRadius: "20px",
            zIndex: "0",
            maxHeight:"500px"
          }}
          src="https://thumbnail.komiku.id/wp-content/uploads/2020/07/Komik-unOrdinary.png?resize=500,500"
        />
        <Col
          css={{
            position: "absolute",
            bottom: "0px",
            zIndex: 1,
          }}
        >
          <Text h1>Komik Name In Here</Text>
        </Col>
      </Row>
      <Spacer />
    </>
  );
};
