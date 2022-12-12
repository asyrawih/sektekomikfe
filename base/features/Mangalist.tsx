import { Card, Col, Divider, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

export const Mangalist = () => {
  const manga: string[] = [
    "some",
    "some",
    "some",
    "some",
    "some",
    "some",
    "some",
    "some",
    "some",
    "some",
    "some",
    "some",
  ];
  return (
    <>
      <Card>
        <Card.Header>
          <Text h3 b color="white">
            Projects
          </Text>
        </Card.Header>
        <Divider />
        <Spacer />
        <Grid.Container justify="center" gap={1} direction="row">
          {manga.map((_, index) => (
            <Grid key={index} xs={12} md={3} lg={3}>
              <MangaCard />
            </Grid>
          ))}
        </Grid.Container>
        <Spacer />
      </Card>
    </>
  );
};

const MangaCard = () => {
  const router = useRouter();
  return (
    <>
      <Row gap={0}>
        <Card
          onPress={() => router.push("/detail/manga/1")}
          variant="bordered"
          isHoverable
          isPressable
          css={{ maxWidth: "300px", maxHeight: "300px" }}
        >
          <Card.Image
            src="https://komikcast.site/wp-content/uploads/2021/11/FEMixWJaIAA4cxF-e1636975753391.jpg"
            objectFit="cover"
            width="100%"
          />
        </Card>
        <Col>
          <Row gap={1}>
            <Text b h6>
              Judul Manga
            </Text>
          </Row>
          <Row justify="space-between" gap={1} fluid={false}>
            <Text b size={12}>
              Chapter 1
            </Text>
            <Text b color="brown" size={12}>
              3 mins ago
            </Text>
          </Row>

          <Row justify="space-between" gap={1} fluid={false}>
            <Text b size={12}>
              Chapter 2
            </Text>
            <Text b color="brown" size={12}>
              1 hour ago
            </Text>
          </Row>
        </Col>
      </Row>
    </>
  );
};
