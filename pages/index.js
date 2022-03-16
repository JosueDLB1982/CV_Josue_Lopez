import { Grid, Box } from '@mui/material'
import Header from '../components/Header'
import Carrusel from '../components/Carrusel'
import Aptitudes from '../components/Aptitudes'
import Info from '../components/Info'
import Form from '../components/Form'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Modal'), {
  ssr: false
})


const Home = () => {

  return (
    <>
      <DynamicComponentWithNoSSR />
      <Box>
        <Header />

        <Carrusel />

        <Aptitudes />

        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Info />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Form />
          </Grid>
          <Footer />
        </Grid>

      </Box>
    </>
  )
}
export default Home