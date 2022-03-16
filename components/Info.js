import styles from '../styles/Info.module.css'
import { Box, Grid, Typography } from '@mui/material'

const Info = () => {
  return (
    <Box className={styles.container}>
      
        <Typography variant='h4' className={styles.tittle}>INFORMACIÓN</Typography>
        <Grid className={styles.containerInfo} container spacing={8}>
          <Grid item xs={12} md={6}>
            <Typography variant='h5'>
              Teléfono:
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='p'>
              939091552
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h5'>
              Email:
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='p'>
              josuedlopez1982@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h5'>
              Sitio web:
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <a href='https://github.com/JosueDLB1982' target="_blank" rel="noreferrer noopener">https://github.com/JosueDLB1982</a>
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant='h5'>
              Dirección:
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant='p'>
              <a href='https://goo.gl/maps/VQuoSbx3LRm25fsGA' target="_blank" rel="noreferrer noopener">Av. Francisco Bilbao 4260, Las Condes, Santiago.</a>
            </Typography>
          </Grid>
        </Grid>
      
    </Box>
  )
}

export default Info