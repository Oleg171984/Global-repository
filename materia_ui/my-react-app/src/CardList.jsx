import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Button, CardActions, IconButton, Typography } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CardList = () => {
    return (
        <Container maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://art-vek.com/files/products/1697_2.1000x.png?2ba2f55fa9d9f311a12d8aed19f1e7ed"
                                alt={`Image ${card}`}
                                title="Image title"
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Card {card}
                                </Typography>
                                <Typography>Card Web Developer blog Web Developer blog</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                                <Button size="small" color="primary">
                                    Edit
                                </Button>
                                <IconButton size="small" color="primary">
                                    <LayersIcon />
                                </IconButton>
                                <IconButton size="small" color="primary">
                                    <PlayCircleFilledIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CardList;
