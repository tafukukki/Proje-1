
import Card from '@mui/joy/Card';


export default function Cards(){
return(
    <Card 
     sx={{
         
         flexDirection: 'column',
         backgroundColor: 'transparent',
         justifyContent: "center",
         alignItems: 'center',
         display: "flex",
         position: "relative",
         border: "none",
         boxShadow: 'none',
     }}
 >
<div style={{ display: 'flex' }}>
    <img
        src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea1a963f08a8c3dcd7c945_visa%20card%2003.svg"
        alt="card1"
        style={{
            transform: "rotate(-10deg)",
            margin: '35px 10px 0 0',
            position: "absolute"  
        }}
    />
    <img
        src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad08ebe75690_visa%20card%2002-min.png"
        
        alt="card2"
        style={{
            transform: "rotate(-20deg)",
            margin: '15px 10px 0px 0',
            position: "absolute"
        }}
    />
    <img
        src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e768e3260571e48a0c_visa%20card-min.png"
        alt="card3"
        style={{
            transform: "rotate(-30deg)",
            position: "absolute",
            margin: "0 10px 10px -20px"
        }}
    />
</div>
</Card>
)
}