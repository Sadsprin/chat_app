let socket = io("http://localhost:3000/");

socket.on('connect', () => {
    console.log("Connected to server.");
});

socket.on('disconnect', () => {
    console.log("disConnected from server");
});

socket.on('newMessage', (message) => {
    console.log("new Message ", message);
})