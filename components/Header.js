import styles from "../styles/Header.module.css"
import { Button, Box, Grid, Typography } from '@mui/material'
import Link from "next/link"
import Avatar from "./Avatar"
import '@fontsource/roboto/700.css'


const Header = () => {
    const Download = () => {
        window.open('https://drive.google.com/uc?id=1JALJ9eSOt37VktPBvwBw37QhB6GjpNPl&export=download', "_parent")
    }

    return (
        <>
            <header className={styles.header} id="arriba">
                <Grid container spacing={1}>

                    <Grid className={styles.fijar} container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Box className={styles.buttonUp}><Link href="#arriba">INICIO</Link></Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Button className={styles.buttonCv} variant="outlined" onClick={Download}>DESCARGAR MI CV COMPLETO</Button>
                        </Grid>
                    </Grid >


                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={styles.profile}>
                        <a href="https://github.com/JosueDLB1982" target="_blank" rel="noreferrer noopener">
                            <Typography variant="h1">
                                Josue D. Lopez B.
                            </Typography>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={styles.seniority}>
                        <Typography variant="h8">
                            Frontend Developer
                        </Typography>
                    </Grid>
                </Grid>
                <Box className={styles.avatar}>
                    <Avatar />
                </Box>

            </header>
        </>
    )
}
export default Header