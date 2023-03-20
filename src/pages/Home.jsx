import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'

import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main /> 
        <Row rowID={1} title='Em breve' fetchURL={requests.requestUpcoming} />
        <Row rowID={2} title='Mais Populares' fetchURL={requests.requestPopular} />
        <Row rowID={3} title='Tendências' fetchURL={requests.requestTrending} />
        <Row rowID={4} title='Adorados pela crítica' fetchURL={requests.requestTopRated} />
    </div>
  )
}

export default Home