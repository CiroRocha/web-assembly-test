import http.server
import socketserver

PORT = 9030

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at http://localhost:" + str(PORT))
    httpd.serve_forever()
