import { Grid, Box } from '@mui/material'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
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
    <Box>
      <DynamicComponentWithNoSSR />
      <Box>
        <Header/>

        <Carousel />

        <Aptitudes />

        <Box sx={{display: 'flex'}}>
          <Grid item xs={12} md={6}>
            <Info />
          </Grid>
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
        </Box>
          <Footer />

      </Box>
    </Box>
  )
}
export default Home