package com.example.testingspringbootmonolith.repositories;

import com.example.testingspringbootmonolith.models.Sale;
import org.springframework.data.repository.CrudRepository;

public interface SaleRepository extends CrudRepository<Sale, Long> {

}