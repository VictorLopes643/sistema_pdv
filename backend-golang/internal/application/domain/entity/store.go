package entity

import (
	"github.com/google/uuid"
	"github.com/victorlopes643/backend-golang-pdv/internal/application/domain/vo"
)

type Store struct {
	Id          uuid.UUID
	Name        string
	Address     string
	TablePoints []TablePoint
}

func NewStore(name, address string) (*Store, error) {
	storeName, err := vo.NewStoreName(name)
	if err != nil {
		return nil, err
	}

	store := &Store{
		Id:          uuid.New(),
		Name:        storeName.GetValue(), 
		Address:     address,
		TablePoints: []TablePoint{},
	}

	return store, nil
}
func (s *Store) IsValidate() bool {
	if s.Name == "" || s.Address == "" {
		return false
	}
	return true
}

func RestoreStore(name, address string) *Store {
	return &Store{
		Name:        name,
		Address:     address,
		TablePoints: []TablePoint{},
	}
}

func (s *Store) SetName(name string) {
	s.Name = name
}

func (s *Store) GetName() string {
	return s.Name
}

func (s *Store) GetAddress() string {
	return s.Address
}
