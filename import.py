import http.server

httpd = http.server.HTTPServer(('2.2.0.2', 8080), http.server.SimpleHTTPRequestHandler)

httpd.serve_forever()