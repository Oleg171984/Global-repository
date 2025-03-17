import React from 'react';
import { Container, Grid, Button, Typography } from '@mui/material';

const MainContent = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Web Developer Blog
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Поняття «зміст висловлювання» пов'язане з категорією інформативності мови і
                притаманне лише тексту. Воно повідомляє читачеві індивідуально-авторське розуміння
                відносин між явищами, їх важливість в усіх сферах надає йому смислову
                цілісність.
            </Typography>

            <Grid container spacing={5} justifyContent="center">
                <Grid item>
                    <Button variant="contained" color="primary">
                        Start Now
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary">
                        Learn more
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainContent;
