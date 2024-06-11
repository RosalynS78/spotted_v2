import React from "react";
import front from "../assets/front.jpg";
import { Container, Box, Table, TableHead, TableContainer, TableCell, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { blueGrey } from '@mui/material/colors';

const primary = blueGrey[50]; // #f44336

const Home = (props) => {
  return (
    <div>
      {/* The name className is used for this property instead of class because of conflicts with the "class" keyword in many languages which are used to manipulate the DOM */}
      <Container class="homeBox">
        <Box
          style={{ background: "#ffffff", color: "#000000", opacity: "0.9" }}
          display="inline-block"
          alignItems="center"
          justifyContent={"center"}
        >
          <div>
            <Typography variant="h4" padding={3}>
             <span class="greetings">Welcome</span> 
            </Typography>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableCell>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  lectus tellus, vulputate ac lacinia id, consequat in ipsum.
                  Quisque quis tempor justo. Integer a enim et odio bibendum
                  venenatis placerat sit amet metus. Nulla facilisi. Vivamus eu
                  odio at lorem efficitur gravida sit amet id eros. Etiam eget
                  nibh ultricies, posuere sapien eu, tincidunt ex. Vestibulum
                  dignissim arcu et mollis sollicitudin. <br /> <br />
                  Curabitur vulputate nulla vitae eros interdum, sed sagittis
                  ante malesuada. Cras luctus ipsum auctor euismod facilisis.
                  Curabitur tempus augue at orci fermentum, a dignissim ligula
                  volutpat. Curabitur eu massa auctor lorem commodo ullamcorper
                  suscipit at nisl. Donec quis lacus magna. Sed egestas sapien
                  tincidunt mi finibus, vitae sodales lectus lacinia. Vestibulum
                  nisi tortor, posuere ullamcorper suscipit tempor, tempus vel
                  nisl.
                </TableCell>
                <TableCell><span><img src={front} width="250" height="180" /></span></TableCell>
              </TableHead>
            </Table>
            {/* <div className="footer-icons">
              <a href="http://facebook.com"><FacebookIcon fontSize="medium" />
                <InstagramIcon fontSize="medium" /></a>
              <a href="http://instagram.com"> </a>
              <a href="http://google.com"> <GoogleIcon fontSize="medium" /></a>
            </div> */}
          </TableContainer>
        </Box>
      </Container>
      <div class="bottomPara-1">
        <Typography variant="h4">
          <p>You Don't Have To Feel Helpless</p>
        </Typography>
      </div>
      <div class="bottomPara-2">
        <Typography variant="h6">
          <p>Helping lost pets reunite with their families</p>
        </Typography>
      </div>
      {/* <div class="footer-icons" id="footerLink">
        <span><a href="#"><FacebookIcon fontSize="large" /></a></span>
        <span><a href="#"><InstagramIcon fontSize="large" /></a></span>
        <span><a href="#"><GoogleIcon fontSize="large" /></a></span>
      </div> */}

    </div>




  );
};

export default Home;
