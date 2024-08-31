package entity

import (
	"github.com/google/uuid"
)

type Client struct {
	Id          uuid.UUID
	Name        string
	PhoneNumber string	
}

func NewClient(name, phoneNumber string) (*Client, error) {
	client := &Client{
		Id:          uuid.New(),
		Name:        name,
		PhoneNumber: phoneNumber,
	}
	return client, nil
}

func (c *Client) GetName() string {
	return c.Name
}
