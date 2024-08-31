package entity

import (
	"github.com/victorlopes643/backend-golang-pdv/internal/application/domain/entity"
	"github.com/victorlopes643/backend-golang-pdv/internal/application/repository"
)


type ClientUseCase struct {
	repo repository.ClientRepositoryInterface
}

func NewClientUseCase(repo repository.ClientRepositoryInterface) *ClientUseCase {
	return &ClientUseCase{repo: repo}
}

func (u *ClientUseCase) Execute(name, phoneNumber string) error {
	resClient, err := entity.NewClient(name, phoneNumber)
	err = u.repo.SaveClient(resClient)
	if err != nil {
		return nil
	}
	return nil
}