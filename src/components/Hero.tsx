import { createStyles, Title, Text, Button, Container } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingBottom: 80,

    "@media (max-width: 755px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      height: 42,
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export interface HeroProps {}

export default function Hero() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          Professional{" "}
          <Text component="span" className={classes.highlight} inherit>
            AI generated
          </Text>{" "}
          product descriptions
        </Title>

        <Container p={0} size={800}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Our AI-powered product description tool helps e-commerce businesses
            create compelling descriptions quickly and easily. Simply provide a
            summary, keywords, and phrases and our tool generates a description
            highlighting the product&apos;s features and benefits. Use it to
            optimize for SEO and capture potential customer attention. With
            artificial intelligence, you can create professional-grade
            descriptions that drive sales and boost brand visibility.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
          >
            Try demo
          </Button>
          <Button className={classes.control} size="lg">
            Dashboard
          </Button>
        </div>
      </div>
    </Container>
  );
}
