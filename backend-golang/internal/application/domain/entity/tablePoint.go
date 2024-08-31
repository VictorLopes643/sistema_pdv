package entity

import (
	"github.com/google/uuid"
)

type TablePoint struct {
	Id          uuid.UUID
	TableNumber int
	TableStatus string
	// Clients     []Client
}

func NewTablePoint(tableNumber int, tableStatus string) *TablePoint {
	return &TablePoint{
		Id:          uuid.New(),
		TableNumber: tableNumber,
		TableStatus: tableStatus,
	}
}