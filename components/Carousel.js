import { useState } from "react"
import styles from "../styles/Carousel.module.css"
import { useTheme } from "@mui/material/styles"
import { Box, Paper, Typography, Button, Avatar, Stack, Container, Link } from "@mui/material"
import MobileStepper from "@mui/material/MobileStepper"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import "@fontsource/roboto/700.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const content = [
  {
    label: "SOBRE MÍ",
    padding: true,
    paragraph:
      "Soy Josue Lopez, y soy Desarrollador Junior. Me gradue como Ingeniero en Sistemas en el año 2017 en la Universidad Nacional Experimental de la Fuerza Armada. Manejo JavaScript. Conociminetos de React-Native y Next JS a nivel intermedio.",
  },
  {
    label: "EXPERIENCIA",
    paragraph:
      "Experiencia en JavaScript, React, GitHub. Manejo básico de YouTrack",
  },
  {
    label: "FORMACIÓN",
    title: "Ingeniero en Sistemas",
    paragraph:
      "Soy graduado como Ingeniero de Sistemas en la Universidad Nacional Experimental de la Fuerza Armada UNEFA Núcleo Zulia",
  },
  {
    label: "ME GUSTA",
    icons: true,
    paragraph:
      "La música, los deportes, la F1, las actividades sociales y conocer gente, me gusta mucho el cine, y por supuesto programar.",
  },
];

function Carousel() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = content.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  };

  const handleStepChange = (step) => {
    setActiveStep(step)
  };

  const Download = () => {
    window.open(
      "https://drive.google.com/uc?id=1JALJ9eSOt37VktPBvwBw37QhB6GjpNPl&export=download",
      "_parent"
    )
  }

  return (
    <Box sx={{ maxWidth: "100%", height: "50%", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 30,
          pl: 2,
          pt: 4,
          bgcolor: "transparent",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval="10000"
      >
        {content.map((step, index) => (
          <Box key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Container>
                <Box sx={{ bgcolor: "transparent" }}>
                  <Stack alignItems="center" color="white">
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={10}
                      color="white"
                    >
                      <Typography variant="h4">{step.label}</Typography>
                      {step.socialMedia ? (
                        <>
                          <Link
                            href="https://github.com/JosueDLB1982"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Avatar
                              alt="GitHub"
                              src="../img/github.png"
                              sx={{
                                width: 70,
                                height: 70,
                                cursor: "pointer",
                                backgroundColor: "white",
                              }}
                            />
                          </Link>
                          <Link
                            href="https://www.linkedin.com/in/josue-lopez-7950b1228/"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Avatar
                              alt="Lindekin"
                              src="../img/lindekin.png"
                              sx={{ width: 70, height: 70, cursor: "pointer" }}
                            />
                          </Link>
                        </>
                      ) : (
                        <Button
                          className={styles.buttonCv}
                          variant="outlined"
                          onClick={Download}
                        >
                          DESCARGAR MI CV COMPLETO
                        </Button>
                      )}
                    </Stack>
                    {step.title ? (
                      <Typography variant="h3" component="h3">
                        {step.title}
                      </Typography>
                    ) : null}
                    {step.icons ? (
                      <Box>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={9}
                          color="white"
                        >
                          <Link
                            href="https://www.formula1.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Avatar
                              alt="f1"
                              src="../img/f1.png"
                              sx={{
                                width: 86,
                                height: 86,
                                marginTop: "10px",
                                background: "#94A7B1",
                                ":hover": { background: "#6F7F88" },
                              }}
                            />
                          </Link>
                          <Link
                            href="https://github.com/JosueDLB1982"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Avatar
                              alt="programar"
                              src="../img/programar.png"
                              sx={{
                                width: 86,
                                height: 86,
                                marginTop: "10px",
                                background: "#94A7B1",
                                ":hover": { background: "#6F7F88" },
                              }}
                            />
                          </Link>
                          <Link
                            href="https://www.imdb.com/title/tt4154796/?ref_=fn_al_tt_4"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Avatar
                              alt="Cine"
                              src="../img/cine.png"
                              sx={{
                                width: 86,
                                height: 86,
                                marginTop: "10px",
                                background: "#94A7B1",
                                ":hover": { background: "#6F7F88" },
                              }}
                            />
                          </Link>
                        </Stack>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={10}
                          color="white"
                          sx={{ marginTop: 1 }}
                        >
                          <Typography variant="p" component="h2">
                            F1
                          </Typography>
                          <Typography variant="p" component="h2">
                            Programar
                          </Typography>
                          <Typography variant="p" component="h2">
                            Cine
                          </Typography>
                        </Stack>
                      </Box>
                    ) : null}
                    <Typography className={styles.paragraph}>
                      {step.paragraph}
                    </Typography>
                    {step.padding ? <Box sx={{ padding: 6 }}></Box> : <></>}
                  </Stack>
                </Box>
              </Container>
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <Box className={styles.boxButtons}>
        <MobileStepper
          sx={{ bgcolor: "transparent" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              className={styles.buttons}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Siguiente
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              className={styles.buttons}
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Anterior
            </Button>
          }
        />
      </Box>
    </Box>
  );
}

export default Carousel
