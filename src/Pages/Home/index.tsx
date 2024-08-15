import React, { useState, useEffect } from "react";
import './index.css';
import HomeRoomCards from "../../components/HomeRoomCards/index.tsx";
import HomeHeader from "../../components/HomeHeader/index.tsx";
import HomeBanner from "../../components/HomeBanner/index.tsx";
import PersonalizedTitle from "../../components/YoursRooms/index.tsx";

import { httpHandler } from "../../Api/Handler.ts";

const Handler = httpHandler();

type Room = {
    id: number;
    ServerId: string;
    roomName: string;
    createdAt: string;
    idAdmin: number;
    storyActive: number;
};

const Home = () => {
    const [rooms, setRooms] = useState<Room[]>([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const result = await Handler.get(`user/rooms/1`);
                console.log(result)

                const roomsData = result.data.map((userRoom: any) => {
                    return userRoom.room;
                }
            );
                setRooms(roomsData);
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        };

        fetchRooms();
    }, []);

    return (
        <div className="home-root">
            <HomeHeader />
            <HomeBanner />
            <PersonalizedTitle text={"Rooms"}/>
            <div className="home-rooms-root">
                {rooms.map((room, index) => (
                    <HomeRoomCards
                        key={index}
                        roomName={room.roomName}
                        createdAt={room.createdAt}
                    />
                ))}
            </div>

            <footer className="footer"></footer>
        </div>
    );
};

export default Home;
