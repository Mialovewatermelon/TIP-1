import socket
import json

HOST = '127.0.0.1'  # Standard loopback interface address (localhost)
PORT = 9000  # Port to listen on (non-privileged ports are > 1023)

with open('data.json') as json_file:
    data = json.load(json_file)

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    print("Listening at", PORT)
    conn, addr = s.accept()
    with conn:
        print('Connected by', addr)
        stopped = False
        while not stopped:
            msg = conn.recv(1024)
            barcode = msg.decode('utf-8')
            reply = ""
            if not barcode:
                reply = "FALSE"
            elif barcode == "QUIT":
                stopped = True
            else:
                reply = json.dumps(data[barcode])
            conn.sendall(reply.encode())

        conn.close()