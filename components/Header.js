import styles from "../styles/Header.module.css";
import { Button, Box, Grid, Typography, Link, Avatar } from "@mui/material";
import "@fontsource/roboto/700.css";

const Header = () => {
  const Download = () => {
    window.open(
      "https://drive.google.com/uc?id=1JALJ9eSOt37VktPBvwBw37QhB6GjpNPl&export=download",
      "_parent"
    );
  };

  return (
    <Box>
      <header className={styles.header} id="up">
        <Grid container spacing={1}>
          <Grid item className={styles.fix}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box>
                <Link href="#up" underline="none" className={styles.buttonUp}>
                  INICIO
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Button
                className={styles.buttonCv}
                variant="outlined"
                onClick={Download}
              >
                DESCARGAR CV COMPLETO
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.profile}
          >
            <Typography variant="h1">Josue D. Lopez B.</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={styles.seniority}
          >
            <Typography variant="h2">Frontend Developer</Typography>
          </Grid>
        </Grid>
        <Box className={styles.avatar}>
          <Avatar
            alt="Josue Lopez"
            src="../img/profile5.jpg"
            sx={{ width: 250, height: 250, border: 12, borderColor: "white" }}
          />
        </Box>
      </header>
    </Box>
  );
};
export default Header;
