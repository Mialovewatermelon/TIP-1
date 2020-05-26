from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.core import serializers
from django.http import JsonResponse
import json
import socket


def queryBarcode(barcode):
    #make connection
    HOST = '127.0.0.1'
    PORT = 9000
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((HOST, PORT))
    #sending query message
    msg = barcode
    sock.send(msg.encode())
    reply = sock.recv(1024).decode('utf-8')
    print(reply)
    #send ending message
    end = "QUIT"
    sock.send(end.encode())
    return reply

def queryPos():
    #make connection
    HOST = '127.0.0.1'
    PORT = 9002
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((HOST, PORT))
    #send query message
    msg = "UPDATE"
    sock.send(msg.encode())
    reply = sock.recv(1024).decode('utf-8')
    print(reply)
    #send ending message
    end = "QUIT"
    sock.send(end.encode())
    return reply

# HOST = '127.0.0.1'
# PORT = 9002

# sk = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# sk.connect((HOST, PORT))
# msg = "UPDATE"
# sk.send(msg.encode())
# print(sk.recv(1024).decode('utf-8'))

# Create your views here.
@require_http_methods(["GET"])
def show_books(request):
    response = {}
    try:
        # books = Book.objects.filter()
        # response['list'] = json.loads(serializers.serialize("json", books))
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1
    return JsonResponse(response)

@require_http_methods(["GET"])
def barcode_get_item(request):
    response = {}
    try:
        # books = Book.objects.filter()
        # response['list'] = json.loads(serializers.serialize("json", books))
        # print(request.GET.get('barcode'))
        response['productInfo']=[json.loads(queryBarcode(request.GET.get('barcode')))]
        print("1111",response['productInfo'])
        # response['productInfo']=[
        #      {
        #         "barcode": "012000000133",
        #         "name": "Pepsi",
        #         "price": "4"
        #     }
        # ]

        response['msg'] = 'success'
        response['error_num'] = 0
        response['newItem'] =0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1
    return JsonResponse(response)