package store

import (
	"errors"
	"strings"

	"github.com/victorlopes643/backend-golang-pdv/internal/application/domain/entity"
)

type StoreRepositoryInterface interface {
	SaveStore(store *entity.Store) error
	GetStoreByName(name string) (entity.Store, error)
	AddTableInStore(name string, table entity.TablePoint) error
}

type StoreRepositoryInMemory struct {
	stores map[string]entity.Store
}

func NewStoreRepository() *StoreRepositoryInMemory {
	return &StoreRepositoryInMemory{
		stores: make(map[string]entity.Store),
	}
}

func (s *StoreRepositoryInMemory) SaveStore(store *entity.Store) error {
	s.stores[store.Name] = *store
	return nil
}

func (r *StoreRepositoryInMemory) GetStoreByName(name string) (entity.Store, error) {
	for _, s := range r.stores {
		if strings.EqualFold(s.Name, name) {
			return s, nil
		}
	}
	return entity.Store{}, errors.New("store not found")
}

func (r *StoreRepositoryInMemory) AddTableInStore(name string, table entity.TablePoint) error {
	store, err := r.GetStoreByName(name)
	if err != nil {
		return err
	}

	store.TablePoints = append(store.TablePoints, table)
	r.stores[name] = store

	return nil
}
