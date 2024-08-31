package vo

import (
	"errors"
	"strings"
)

const MaxStoreNameLength = 20

type StoreName struct {
	value string
}

func NewStoreName(value string) (*StoreName, error) {
	name := &StoreName{value: value}
	if err := name.Validate(); err != nil {
		return nil, err
	}
	return name, nil
}

func (s *StoreName) Validate() error {
	if strings.TrimSpace(s.value) == "" {
		return errors.New("store name cannot be empty")
	}
	if len(s.value) > MaxStoreNameLength {
		return errors.New("store name cannot exceed 20 characters")
	}
	return nil
}

func (s *StoreName) GetValue() string {
	return s.value
}
