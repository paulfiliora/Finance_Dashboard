package com.example.testingspringbootmonolith.repositories;

import com.example.testingspringbootmonolith.models.MonthlyRevenue;
import org.springframework.data.repository.CrudRepository;

public interface MonthlyRevenueRepository extends CrudRepository<MonthlyRevenue, Long> {


}