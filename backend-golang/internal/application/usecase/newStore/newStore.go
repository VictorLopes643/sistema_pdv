package newStore

import (
	"github.com/victorlopes643/backend-golang-pdv/internal/application/domain/entity"
	"github.com/victorlopes643/backend-golang-pdv/internal/application/repository/store"
)

type newStoreUseCase struct {
	repo store.StoreRepositoryInterface
}

func NewStoreUseCase(repo store.StoreRepositoryInterface) *newStoreUseCase {
	return &newStoreUseCase{repo: repo}
}

func (u *newStoreUseCase) Execute(name, address string) error {
	resStore, err := entity.NewStore(name, address)
	err = u.repo.SaveStore(resStore)

	if err != nil {
		return err
	}

	return nil
}


