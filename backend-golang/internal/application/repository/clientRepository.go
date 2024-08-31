package repository

import (
	"errors"
	"strings"

	"github.com/victorlopes643/backend-golang-pdv/internal/application/domain/entity"
)

type ClientRepositoryInterface interface {
	SaveClient(client *entity.Client) error
	GetClientByName(name string) (*entity.Client, error)
	GetClientByPhoneNumber(phoneNumber string) (*entity.Client, error)
}

type ClientRepositoryInMemory struct {
	clients map[string]*entity.Client
}

func NewClientRepository() *ClientRepositoryInMemory {
	return &ClientRepositoryInMemory{
		clients: make(map[string]*entity.Client),
	}
}

func (c *ClientRepositoryInMemory) SaveClient(client *entity.Client) error {
	c.clients[client.Name] = client
	return nil
}

func (r *ClientRepositoryInMemory) GetClientByName(name string) (*entity.Client, error) {
	for _, c := range r.clients {
		if strings.EqualFold(c.Name, name) {
			return c, nil
		}
	}
	return nil, errors.New("client not found")
}

func (r *ClientRepositoryInMemory) GetClientByPhoneNumber(phoneNumber string) (*entity.Client, error) {
	for _, c := range r.clients {
		if strings.EqualFold(c.PhoneNumber, phoneNumber) {
			return c, nil
		}
	}
	return nil, errors.New("client not found")
}
