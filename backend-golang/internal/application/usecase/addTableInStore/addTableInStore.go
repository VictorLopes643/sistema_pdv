package addtableinstore

import (
	"github.com/victorlopes643/backend-golang-pdv/internal/application/domain/entity"
	"github.com/victorlopes643/backend-golang-pdv/internal/application/repository/store"
)

type AddTableInStoreUseCase struct {
	repo store.StoreRepositoryInterface
}

func NewAddTableInStoreUseCase(repo store.StoreRepositoryInterface) *AddTableInStoreUseCase {
	return &AddTableInStoreUseCase{repo: repo}
}

func (u *AddTableInStoreUseCase) Execute(name string, table entity.TablePoint) error {
	err := u.repo.AddTableInStore(name, table)
	if err != nil {
		return err
	}
	return nil
}