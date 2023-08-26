import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BasicRating from './BasicRating';



export default function CardBox({ title, description, imageUrl}) {
  return (
    <Box sx={{ minHeight: 300, mt: 5 }}>
      <Card
        sx={(theme) => ({
          width: '100%',
          maxWidth: 600,
          flexDirection: 'column',
          overflow: 'hidden',
          marginLeft: '8rem',
          
          
          p: 2,
          transition: 'transform 0.3s, border 0.3s',
          '&:hover': {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: 'translateY(-2px)',
            "& img": {
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                  transform: 'scale(1.15)'
              }
          }
          },
        })}
      >
        <Box sx={{ position: 'relative'}}>
          <img
            src={imageUrl}
            alt={title}   
            style={{ width: '100%' }}
          />
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            sx={{ position: 'absolute', top: 5, right: 5 }}
          >
            <FavoriteBorderRoundedIcon color="danger" />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography level="title-lg">{title}</Typography>
          <Typography level="title-md">$199.99</Typography>
        </Box>
        <Typography level="body-sm" sx={{ 
            mt: 1,
            textAlign: 'left',
        }}>{description}</Typography>
        <BasicRating sx={{ mt: 1 }} />
        <Button 
    variant="outlined" 
    sx={{ 
        mt: 2, 
        px: 4, 
        py: 2, 
        borderRadius: '25px', 
        fontSize: '0.8rem', 
        alignSelf: 'flex-start',
        transition: 'background-color 0.5s ease-in, borderColor 0.5s ease-in', 
        '&:hover': {
          color: `white`,
            backgroundColor: '#003d29', 
            borderColor: '#003d29',
               
        }
    }}>
    Add to Cart
</Button>
      </Card>
    </Box>
  );
}