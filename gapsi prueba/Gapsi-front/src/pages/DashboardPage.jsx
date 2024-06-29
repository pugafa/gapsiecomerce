import { Grid } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { images } from "../assets";
import Animate from '../components/common/Animate';
import api from '../Services/home'

const DashboardPage = () => {
  const [saludo, setSaludo] = useState("Cargando APIS");
  const [version, setVersion] = useState("Cargando Version");
  useEffect(() => {
    setTimeout(async () => {
        
            api.saludo()
                .then((found) => {
                  setSaludo(found);
                    console.log(found);
                })
                api.version()
                .then((found) => {
                  setVersion(found);
                    console.log(found);
                })
      
    }, 1000);
}, [])




  return (
    <Grid container spacing={3}>
    
      <Grid item xs={12} lg={8}>
        
          <Grid item xs={12}>
            <Animate delay={2.5}>
                 <img src={images.bookingImage} width={"100%"}></img>
           

            </Animate>
            <Animate delay={1.5}>
                         <h1>{saludo}</h1>

            </Animate>
            <Animate delay={1.5}>
                         <h2>{version}</h2>

            </Animate>
          </Grid>
      
      </Grid>
    </Grid>
  );
};

export default DashboardPage;