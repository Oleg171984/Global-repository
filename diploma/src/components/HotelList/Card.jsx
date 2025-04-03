import {
  Box,
  Card as MUICard,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export function Card({ hotel }) {
  const [loading, setLoading] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    if (hotel.videoUrl) {
      window.open(hotel.videoUrl, "_blank"); // Відкриває відео в новій вкладці
    }
  };

  return (
    <MUICard
      sx={{ maxWidth: 345, textDecoration: "none" }}
      component="div"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {loading && (
        <Box
          sx={{
            position: "relative",
            height: "140px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <CardMedia
        component="img"
        alt={hotel.name}
        height="140"
        image={hotel.photo}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        sx={{ display: loading ? "none" : "block" }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {hotel.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          City: {hotel.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {hotel.phone_number}
        </Typography>
      </CardContent>
    </MUICard>
  );
}
