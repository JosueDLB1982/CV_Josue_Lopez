import styles from "../styles/Footer.module.css"
import { Grid, Button, Box, Avatar, Typography, Link } from "@mui/material"

const Footer = () => {
  const Download = () => {
    window.open("https://drive.google.com/uc?id=1JALJ9eSOt37VktPBvwBw37QhB6GjpNPl&export=download", "_parent")
  }
  return (
    <Box>
      <footer className={styles.style}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box className={styles.container}>
              <Button
                className={styles.buttonCv}
                variant="outlined"
                onClick={Download}
              >
                DESCARGAR MI CV COMPLETO
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box className={styles.container}>
              <Link
                href="https://github.com/JosueDLB1982"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Avatar
                  alt="GitHub"
                  src="../img/github.png"
                  sx={{ width: 36, height: 36, cursor: "pointer" }}
                  className={styles.avatar}
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
                  sx={{ width: 36, height: 36, cursor: "pointer" }}
                  className={styles.avatar}
                />
              </Link>
            </Box>
            <Box className={styles.container}>
              <Typography className={styles.letra}>Sígueme</Typography>
            </Box>
          </Grid>
        </Grid>
      </footer>
    </Box>
  )
}

export default Footer
