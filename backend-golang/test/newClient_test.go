package test

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/victorlopes643/backend-golang-pdv/internal/application/repository"
	newClient "github.com/victorlopes643/backend-golang-pdv/internal/application/usecase"
)

func TestNewClient(t *testing.T) {
	repo := repository.NewClientRepository()
	useClient := newClient.NewClientUseCase(repo)
	err := useClient.Execute("Victor", "123456789")
	assert.Nil(t, err)

}
