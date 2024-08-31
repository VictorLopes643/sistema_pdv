package httpAdpter

import "net/http"

type httpServerInterface interface {
	Register(method string, path string, handler http.HandlerFunc)
	Listen(port string) error
}


type HTTPAdpter struct {
    mux *http.ServeMux
}

func NewHTTPAdpter() *HTTPAdpter {
    return &HTTPAdpter{
        mux: http.NewServeMux(),
    }
}

func (h *HTTPAdpter) Register(method string, path string, handler http.HandlerFunc) {
    h.mux.HandleFunc(path, handler)
}

func (h *HTTPAdpter) Listen(port string) error {
    return http.ListenAndServe(":"+port, h.mux)
}
