import {
  Badge,
  Card,
  Col,
  Collapse,
  Container,
  Grid,
  Row,
  Table,
  Text,
} from "@nextui-org/react";
import useMediaQuery from "../../hooks/useMedia";

enum Screen {
  Mobile = "(min-width: 920px)",
}

export const DetailManga = () => {
  let mobile = useMediaQuery(Screen.Mobile);

  const categories = ["Action", "Adventure", "Manhua", "Shounen"];

  return (
    <Row>
      <Col>
        <Card variant="bordered">
          <Card.Image
            src="https://komikcast.site/wp-content/uploads/2022/11/Leveling-Up-By-Only-Eating-e1668897316111.jpg"
            objectFit="cover"
            alt="image"
            height={400}
            css={{
              maxWidth: "400px",
              minWidth: "100%",
            }}
          />
          <Card.Body>
            <Grid.Container gap={1}>
              <Row wrap="wrap">
                <Col>
                  <Text h2>Leveling Up, By Only Eating! Bahasa Indonesia</Text>
                  <Text h4>Leveling Up, By Only Eating! Bahasa Indonesia</Text>
                </Col>
              </Row>
              {categories.map((item, index) => (
                <Grid key={index}>
                  <Badge enableShadow disableOutline>
                    {item.toUpperCase()}
                  </Badge>
                </Grid>
              ))}
            </Grid.Container>
            <Collapse.Group>
              <Collapse title="Information" expanded></Collapse>
              <Collapse title="Chapter List"></Collapse>
            </Collapse.Group>
          </Card.Body>
        </Card>
        {mobile && (
          <Row
            css={{
              position: "absolute",
              maxWidth: "240px",
              right: "0px",
              top: "200px",
              padding: "10px",
            }}
          >
            <Card variant="bordered">
              <Card.Image
                src="https://komikcast.site/wp-content/uploads/2022/11/Leveling-Up-By-Only-Eating-e1668897316111.jpg"
                objectFit="cover"
                alt="image"
              />
            </Card>
          </Row>
        )}
      </Col>
    </Row>
  );
};
