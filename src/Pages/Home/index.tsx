import React, { useState, useEffect } from "react";
import './index.css';
import HomeRoomCards from "../../components/HomeRoomCards/index.tsx";
import HomeHeader from "../../components/HomeHeader/index.tsx";
import HomeBanner from "../../components/HomeBanner/index.tsx";
import PersonalizedTitle from "../../components/YoursRooms/index.tsx";

import { httpHandler } from "../../Api/Handler.ts";
import { useNavigate } from "react-router-dom";

const Handler = httpHandler();

type Room = {
    id: number;
    ServerId: string;
    roomName: string;
    createdAt: string;
    idAdmin: number;
    storyActive: number;
};

type User = {
    id: number;
    Name: string;
    Email: string;
}

const Home = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>(null);
    const [rooms, setRooms] = useState<Room[]>([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const localStorageObject = localStorage.getItem("userId");
                if (!localStorageObject) return navigate("/");

                const localUser = JSON.parse(localStorageObject) as User;
                setUser(localUser);

                const response = await Handler.get(`user/${localUser.id}`);
                const newUser = response.data;

                if (!newUser || newUser.Name !== localUser.Name || newUser.id !== localUser.id || newUser.Email !== localUser.Email) {
                    alert("You are not logged in correctly!");
                    return window.location.href = `/Login`;
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {
        const fetchRooms = async () => {
            if (!user) return;

            try {
                const result = await Handler.get(`user/rooms/${user.id}`);
                const roomsData = result.data.map((userRoom: any) => userRoom.room);
                setRooms(roomsData);
                console.log(roomsData)
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        };

        fetchRooms();
    }, []);

    return (
        <div className="home-root">
            <HomeHeader userName={user?.Name}/>
            <HomeBanner />
            <PersonalizedTitle text={"Rooms"} />
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
