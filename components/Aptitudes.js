import { Container, Box } from '@mui/material'
import Image from 'next/image'
import aptitudes from '../public/img/aptitudes.png'
import styles from '../styles/Aptitudes.module.css'

const Aptitudes = () => {
  return (
    <Container
        className={styles.aptitudesCont}
    >
        <Box>
            <h1 className={styles.aptitudes}>APTITUDES</h1>
        </Box>
        <Image
            src={aptitudes}
            alt='Aptitudes'
            width={1200}
            height={450}
            className={styles.aptitudesImg}
        />
    </Container>
  )
}

export default Aptitudes