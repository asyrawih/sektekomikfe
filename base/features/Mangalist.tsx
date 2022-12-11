import { Button, Card, Col, Grid, Modal, Text } from "@nextui-org/react";
import React from "react";

export const Mangalist = () => {
  return (
    <>
      <Card>
        <Grid.Container justify="center" gap={2} direction="row">
          <Grid>
            <MangaCard />
          </Grid>
          <Grid>
            <MangaCard />
          </Grid>
          <Grid>
            <MangaCard />
          </Grid>
          <Grid>
            <MangaCard />
          </Grid>
          <Grid>
            <MangaCard />
          </Grid>
          <Grid>
            <MangaCard />
          </Grid>
          <Grid>
            <MangaCard />
          </Grid>
          <Grid>
            <MangaCard />
          </Grid>
          <Grid>
            <MangaCard />
          </Grid>
          <Grid>
            <MangaCard />
          </Grid>
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
        onClick={handler}
        isHoverable
        isPressable
        css={{ maxWidth: "200px" }}
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
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
