import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import cookie from "cookie";

import Logo from "../assets/Logo";

const Navigation = (props) => {
    const navigate = useNavigate();
    const loggedIn = document.cookie;

    return (
        <div class="content">
            <div className="sLogo">
                <Logo />
            </div>
            <div className="login-btn">
                <Button class="log"
                    onClick={() => {
                        document.cookie = cookie.serialize("loggedIn", null, {
                            maxAge: 0,
                        });
                        document.cookie = cookie.serialize("jwt", null, {
                            maxAge: 0,
                        });
                        document.cookie = cookie.serialize("userId", null, {
                            maxAge: 0,
                        });
                        navigate("/login");
                    }}
                >
                    {loggedIn ? "LOGOUT" : "LOGIN"}
                </Button>
            </div>

            <AppBar
                style={{ background: "#ffffff", opacity: "0.9", height: "30px", justifyContent: "center", position: "relative" }}
            >
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        <ul className="nav-list">
                            <li className="nav-list-item">
                                <Button>
                                    <Link to="/home">Home</Link>
                                </Button>
                            </li>

                            <Button>
                                <li className="nav-list-item">
                                    <Link to="/addlistingslost">Report Missing </Link>
                                </li>
                            </Button>
                            <Button>
                                <li className="nav-list-item">
                                    <Link to="/listingslost">LOST PETS</Link>
                                </li>
                            </Button>

                            <Button>
                                <li className="nav-list-item">
                                    <Link to="/listingsfound">FOUND PETS</Link>
                                </li>
                            </Button>

                            <Button>
                                <li className="nav-list-item">
                                    <Link to="/addlistingsfound">Report Found</Link>
                                </li>
                            </Button>
                        </ul>
                    </Typography>
                </Toolbar>
            </AppBar>

            {document.cookie === "loggedIn=true" ? (
                <Typography variant="h6" color="white" padding={1}>
                    Logged in as: <span>{props.users.username}</span>
                </Typography>
            ) : null}

            <Box
                backgroundColor="primary.main"
                display="flex"
                flex-direction={"column"}
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
            >
                {document.cookie === "loggedIn=true" ? (
                    <Typography variant="h6" color="white" padding={1}>
                        Logged in as: <span>{props.users.username}</span>
                    </Typography>
                ) : null}
            </Box>
        </div>
    );
};

export default Navigation;