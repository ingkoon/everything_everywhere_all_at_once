import React, { useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const WebSocketChat: React.FC = () => {
    const [roomName, setRoomName] = useState("");
    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useState<string[]>([]);

    let stompClient: Stomp.Client | null = null;

    const connect = () => {
        const trimmedRoomName = roomName.trim();
        if (!trimmedRoomName) {
            alert("Please enter a room name.");
            return;
        }

        const socket = new SockJS(`/api/${trimmedRoomName}`);
        stompClient = Stomp.over(socket);
        stompClient.connect({}, (frame) => {
            console.log("Connected: " + frame);
            stompClient.subscribe(`/topic/${trimmedRoomName}`, (message) => {
                showMessage(JSON.parse(message.body).content);
            });
        });
    };

    const sendMessage = () => {
        if (!stompClient) return;
        const messageContent = message.trim();
        if (!messageContent) return;

        const messageObj = { content: messageContent };
        stompClient.send("/app/sendMessage", {}, JSON.stringify(messageObj));
        setMessage("");
    };

    const showMessage = (message: string) => {
        setChatMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <div>
            <label htmlFor="roomName">Enter room name:</label>
            <input
                type="text"
                id="roomName"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
            />
            <button onClick={connect}>Connect</button>
            <br />
            <div>
                {chatMessages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default WebSocketChat;