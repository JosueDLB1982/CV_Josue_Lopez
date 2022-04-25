import styles from "../styles/Info.module.css"
import { Box, Grid, Typography, Link } from "@mui/material"

const Info = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.tittle}>
        INFORMACIÓN
      </Typography>
      <Grid className={styles.containerInfo} container spacing={8}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Teléfono:</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link 
            href="https://api.whatsapp.com/send/?phone=0056939091552&text=Sigue+al+chat+para+comunicarte+con+Josue+Lopez+Frontend+Developer.&app_absent=0"
            underline="none"
            color="white"
            target="_blank"
            rel="noreferrer noopener"
          >
          <Typography variant="p">939091552</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Email:</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
        <Link 
            href="mailto:josuedlopez1982@gmail.com"
            underline="none"
            color="white"
            target="_blank"
            rel="noreferrer noopener"
          >
          <Typography variant="p">josuedlopez1982@gmail.com</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Sitio web:</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            <Link
              href="https://www.linkedin.com/in/josue-lopez-7950b1228/"
              underline="none"
              color="white"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.linkedin.com/in/josue-lopez-7950b1228/
            </Link>
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h5">Dirección:</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="p">
            <Link
              href="https://goo.gl/maps/VQuoSbx3LRm25fsGA"
              underline="none"
              color="white"
              target="_blank"
              rel="noreferrer noopener"
            >
              Av. Francisco Bilbao 4260, Las Condes, Santiago.
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Info
