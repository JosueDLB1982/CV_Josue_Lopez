import styles from "../styles/Aptitudes.module.css"
import { Box, Typography, Stack, Grid } from "@mui/material/"

const Aptitudes = () => {
  return (
    <Box className={styles.container}>
      <Box>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            marginLeft: 32,
            marginTop: -90,
            position: "absolute",
            zIndex: 2,
            color: "white",
            fontSize: "2.5vw",
          }}
        >
          Aptitudes
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ marginLeft: "0%", marginTop: "0%" }}>
        <Stack alignItems="stretch">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.box1}
            >
              <Typography
                variant="body1"
                component="h3"
                sx={{
                  marginLeft: "28%",
                  marginTop: "18%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "1.5vw",
                  color: "darkgray",
                }}
              >
                HTML5
              </Typography>
              <Typography
                variant="h6"
                component="h1"
                sx={{
                  marginLeft: "20%",
                  marginTop: "35%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "1.3vw",
                  color: "white",
                }}
              >
                Intermedio
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.box2}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  marginLeft: "38%",
                  marginTop: "25%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "2vw",
                  color: "darkgray",
                }}
              >
                CSS3
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  marginLeft: "22%",
                  marginTop: "35%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "2.5vw",
                  color: "white",
                }}
              >
                Intermedio
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.box3}
            >
              <Typography
                variant="body1"
                component="h3"
                sx={{
                  marginLeft: "33%",
                  marginTop: "26%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "1.5vw",
                  color: "darkgray",
                }}
              >
                Idiomas
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  marginLeft: "35%",
                  marginTop: "38%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "1.3vw",
                  color: "white",
                }}
              >
                Español
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.box4}
            >
              <Typography
                variant="body1"
                component="h3"
                sx={{
                  marginLeft: "14%",
                  marginTop: "15%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "1.8vw",
                }}
              >
                JavaScript
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  marginLeft: "25%",
                  marginTop: "30%",
                  position: "absolute",
                  zIndex: 2,
                  color: "darkblue",
                  fontSize: "1.3vw",
                }}
              >
                Iniciado
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.box5}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  marginLeft: "40%",
                  marginTop: "22%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "2.5vw",
                }}
              >
                React
              </Typography>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  marginLeft: "43%",
                  marginTop: "43%",
                  position: "absolute",
                  zIndex: 2,
                  color: "darkblue",
                  fontSize: "1.8vw",
                }}
              >
                Básico
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={styles.box6}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  marginLeft: "43%",
                  marginTop: "34%",
                  position: "absolute",
                  zIndex: 2,
                  fontSize: "2.5vw",
                }}
              >
                Next
              </Typography>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  marginLeft: "37%",
                  marginTop: "42%",
                  position: "absolute",
                  zIndex: 2,
                  color: "darkblue",
                  fontSize: "3vw",
                }}
              >
                Básico
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Aptitudes
