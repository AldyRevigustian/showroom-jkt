import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL_PROFILE } from "../utils/constant";
import { Link} from "react-router-dom";
import { Circle } from "@mui/icons-material";


export default function Room(props) {
    const [profiles, setProfiles] = useState('');
    const { profile_id } = props;


    const getRoom = () => {
        axios
            .get(API_URL_PROFILE + profile_id)
            .then((response) => {
                const profiles = response.data;
                setProfiles(profiles);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getRoom();
    }, []);


    // console.log(profiles);
    return (
        <div>
            {profiles.is_onlive ? (
                <Card style={{ width: "15rem", margin: 10 }}>
                    <Card.Img variant="top" src={profiles.image} />
                    <Card.Body>
                        <Card.Title style={{  fontSize: 13, marginBottom: 10, }}>{profiles.room_name} 
                        </Card.Title>
                            <Link
                                style={{ display: "inline", backgroundColor: 'red', padding: 5, borderRadius: 5, color: 'white', textDecoration: 'none', fontSize:15 }}
                                to={`/streaming/${profiles.room_id}`}>
                            <Circle style={{fontSize:12,marginBottom:3}} /> Live </Link>
                        
                    </Card.Body>
                </Card>
            ) : ""}
        </div>
    );

}





