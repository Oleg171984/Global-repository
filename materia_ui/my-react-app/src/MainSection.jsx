import React from 'react';
import { Paper, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const MainFeaturesPost = styled(Paper)(({ theme }) => ({
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
}));

const MainFeaturesPostContent = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
    maxWidth: '500px',
}));

const MainSection = () => {
    return (
        <MainFeaturesPost
            sx={{
                backgroundImage: `url(https://art-vek.com/files/products/1697_2.1000x.png?2ba2f55fa9d9f311a12d8aed19f1e7ed)`,
            }}
        >
            <Container maxWidth="lg">
                <MainFeaturesPostContent>
                    <Typography component="h1" color="inherit" gutterBottom>
                        БЛОГ ВЕБ-РОЗРОБНИКА
                    </Typography>
                    <Typography component="h5" color="inherit" paragraph>
                        Поняття «зміст висловлювання» пов'язане з категорією інформативності мови і
                        притаманне лише тексту. Воно повідомляє читачеві індивідуально-авторське розуміння
                        відносин між явищами, їх важливість в усіх сферах надає йому смислову цілісність.
                    </Typography>
                    <Button variant="contained" color="secondary">
                        Дізнатися більше
                    </Button>
                </MainFeaturesPostContent>
            </Container>
        </MainFeaturesPost>
    );
};

export default MainSection;
