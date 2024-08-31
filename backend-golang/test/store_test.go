package newStore_test

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/victorlopes643/backend-golang-pdv/internal/application/domain/entity"
	storeRepo "github.com/victorlopes643/backend-golang-pdv/internal/application/repository/store"
	store "github.com/victorlopes643/backend-golang-pdv/internal/application/usecase/newStore"
)

func TestNewStore(t *testing.T) {
	repo := storeRepo.NewStoreRepository()
	useStore := store.NewStoreUseCase(repo)

	err := useStore.Execute("Loja", "Rua Israel")
	assert.Nil(t, err)

	stored, err := repo.GetStoreByName("Loja")
	assert.Nil(t, err)
	assert.Equal(t, "Rua Israel", stored.Address)
}


func TestAddTableInStore(t *testing.T) {
	repo := storeRepo.NewStoreRepository()
	useStore := store.NewStoreUseCase(repo)

	err := useStore.Execute("Loja", "Rua Israel")
	assert.Nil(t, err)

	stored, err := repo.GetStoreByName("Loja")
	assert.Nil(t, err)
	assert.Equal(t, "Rua Israel", stored.Address)

	tablePoint := entity.NewTablePoint(1,"Livre")
	fmt.Println(tablePoint)
	err = repo.AddTableInStore("Loja", *tablePoint)
	assert.Nil(t, err)
}