import React from "react";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/material/Card';



export default function CreditCard(){
    return(
        <Box  >  
       <Card 
    sx={{
        height: "300px",
        width: "600px",
        flexDirection: 'column',
        backgroundColor: 'transparent',
        textAlign: "left",
        
        position: "relative",
        border: "none",
        boxShadow: 'none',
    }}
>

<h2 style={{
                    color: `black`,
                    
                    fontSize: `64px`,
                    margin: '30px 0 10px 20px', 
                }}>
                    Get 5% Cash Back 
                  
                </h2>
                <p style={{
                    
                    margin: '20px 0 20px 20px', 
                    color: `black`,
                    fontSize: `22px`,
                }}>
                    on Shopcart.com
                </p>
     <Button 
    variant="outlined" 
    sx={{ 
        mt: 2, 
        px: 4, 
        py: 2, 
        borderRadius: '30px', 
        height: "60px",
        color: `white`,
        fontSize: '1rem', 
        marginLeft: "10px",
        alignSelf: 'flex-start',
        backgroundColor: '#003d29', 
        transition: 'background-color 0.5s ease-in, borderColor 0.5s ease-in', 
        '&:hover': {
          color: `white`,
            backgroundColor: 'black', 
            
               
        }
    }}>
    Learn More
</Button>


</Card>

    


</Box>
    )
};