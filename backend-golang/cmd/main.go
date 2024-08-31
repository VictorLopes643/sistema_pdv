package main

import (
	"fmt"
	"net/http"

	"github.com/victorlopes643/backend-golang-pdv/pkg/httpAdpter"
)

func main() {
	muxServer := httpAdpter.NewHTTPAdpter()

    fmt.Println("Starting server on port 8080")

    // Registra rotas
    muxServer.Register("GET", "/", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("Hello from MuxServer!"))
    })

    // Inicia o servidor
    fmt.Println("Starting server on port 8080...")
    if err := muxServer.Listen("8080"); err != nil {
        panic(err)
    }
}
