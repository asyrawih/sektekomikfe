import {
  Button,
  Card,
  Col,
  Divider,
  Grid,
  Modal,
  Text,
} from "@nextui-org/react";
import React from "react";

export const Mangalist = () => {
  const manga: string[] = ["some", "some", "some", "some", "some", "some", "some", "some" ,"some", "some", "some" , "some"];
  return (
    <>
      <Card>
        <Card.Header>
          <Text h3 b color="white">
            Projects
          </Text>
        </Card.Header>
        <Divider />
        <Grid.Container justify="center" gap={2} direction="row">
          {manga.map((_, index) => (
            <Grid key={index} xs={12} md={2}>
              <MangaCard />
            </Grid>
          ))}
        </Grid.Container>
      </Card>
    </>
  );
};

const MangaCard = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <>
      <Card
        variant="bordered"
        onPress={handler}
        isHoverable
        isPressable
        css={{ maxWidth: "100%" }}
      >
        <Card.Image
          src="https://komikcast.site/wp-content/uploads/2021/11/FEMixWJaIAA4cxF-e1636975753391.jpg"
          objectFit="cover"
          width="100%"
        />
        <Card.Footer
          css={{
            position: "absolute",
            zIndex: 1,
            bottom: 0,
            padding: 0,
          }}
        >
          <Col
            css={{
              backgroundImage:
                "linear-gradient(to left ,rgba(255,0,0,0),rgb(14 1 1))",
              padding: 12,
            }}
          >
            <Text b small color="white">
              Stream the Acme event
            </Text>
          </Col>
        </Card.Footer>
      </Card>
      <Modal
        closeButton
        blur
        width="600px"
        aria-labelledby="list-chapter"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="list-chapter" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <ChapterTable />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const ChapterTable = () => {
  return (
    <>
      <Text>Chapter 1</Text>
      <Text>Chapter 1</Text>
      <Text>Chapter 1</Text>
      <Text>Chapter 1</Text>
      <Text>Chapter 1</Text>
      <Text>Chapter 1</Text>
      <Text>Chapter 1</Text>
      <Text>Chapter 1</Text>
      <Text>Chapter 1</Text>
      <Text>Chapter 1</Text>
      <Text>Chapter 1</Text>
      <Text>Chapter 1</Text>
    </>
  );
};
