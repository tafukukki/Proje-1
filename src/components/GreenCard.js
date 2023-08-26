import React from "react";
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';



export default function GreenCard(){
    return(
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh' 
            }}
        >
            <Card 
                sx={{
                    height: "380px",
                    width: "420px",
                    flexDirection: 'column',
                    backgroundColor: "#003d29",
                    textAlign: "left",
                    position: "relative",
                    borderRadius: `0`,
                    padding: `30px 20px`,
                    margin: `0`,
                }}
            >
                <h2 style={{
                    color: `white`,
                    
                    fontSize: `52px`,
                    margin: '0 0 10px 20px', 
                }}>
                    Get 5% Cash 
                    <br />
                    Back On $200
                </h2>
            
                <p style={{
                    
                    margin: '0 0 20px 20px', 
                    color: `white`,
                    fontSize: `18px`,
                }}>
                    Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
                </p>
    
                <Button 
                    variant="outlined" 
                    sx={{ 
                        mt: 2, 
                        px: 4, 
                        py: 2, 
                        marginLeft: `20px`,
                        height: `50px`,
                        width:`150px`,
                        borderRadius: '25px', 
                        borderColor: `white`,
                        color: `white`,
                        fontSize: '0,9rem', 
                        alignSelf: 'flex-start',
                        transition: 'background-color 0.2s ease-in, borderColor 0.2s ease-in', 
                        '&:hover': {
                            color: `white`,
                            backgroundColor: 'black', 
                            borderColor: '#003d29',
                        }
                    }}>
                    Learn More
                </Button>
            </Card>
        </Box>
    );
    

}