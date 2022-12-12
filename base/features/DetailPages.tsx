import { Badge, Card, Col, CSS, Grid, Row, Text } from "@nextui-org/react";
import useMediaQuery from "../../hooks/useMedia";

enum Screen {
  Mobile = "(min-width: 920px)",
}

const ContentCard: CSS = {
  padding: "0px",
  borderTopRightRadius: "0px",
  borderTopLeftRadius: "0px",
};

const cardBannerImage: CSS = {
  maxWidth: "400px",
  minWidth: "100%",
  filter: "blur(10px)",
};

const cardFooter: CSS = {
  position: "absolute",
  bottom: "0px",
  borderRadius: "0px",
  backgroundColor: "rgba(0,0,0, 0.3)",
  borderTop: "20px",
  borderTopColor: "white",
  borderTopStyle: "ridge",
  borderTopWidth: "thin",
};

const SideCardImage: CSS = {
  position: "absolute",
  maxWidth: "240px",
  right: "0px",
  top: "143px",
  padding: "10px",
  zIndex: "999",
};

type Chapter = Array<String>;

type ChapterList = {
  chapter: Chapter;
};

export const DetailManga = () => {
  const chapter: Chapter = [
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
      <Row>
        <Banner />
      </Row>
      <Row>
        <Card css={ContentCard}>
          <Card.Header>
            <Text h3>Chapter list</Text>
          </Card.Header>
          <Card.Body css={{ maxHeight: "400px" }}>
            <ChapterList chapter={chapter} />
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

const ChapterList = ({ chapter }: ChapterList) => {
  return (
    <>
      <Col>
        {chapter.map((item, index) => (
          <Card key={index} isPressable variant="flat">
            <Card.Body>
              <Text>{item}</Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </>
  );
};

const Banner: React.FC = () => {
  let mobile = useMediaQuery(Screen.Mobile);
  const categories = ["Action", "Adventure", "Manhua", "Shounen"];
  return (
    <Col>
      <Card
        variant="bordered"
        css={{
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <Card.Body css={{ padding: 0 }}>
          <Card.Image
            src="https://komikcast.site/wp-content/uploads/2022/11/Leveling-Up-By-Only-Eating-e1668897316111.jpg"
            objectFit="cover"
            alt="image"
            height={400}
            css={cardBannerImage}
          />
        </Card.Body>
        <Card.Footer isBlurred css={cardFooter}>
          <Grid.Container gap={1}>
            <Row wrap="wrap">
              <Col>
                <Text h4 color="white">
                  Leveling Up, By Only Eating! Bahasa Indonesia
                </Text>
                <Text h6 color="white">
                  Leveling Up, By Only Eating! Bahasa Indonesia
                </Text>
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
        </Card.Footer>
      </Card>
      {mobile && (
        <Row css={SideCardImage}>
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
  );
};
