package com.example.testingspringbootmonolith.repositories;

import com.example.testingspringbootmonolith.models.Idea;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IdeasRepository extends CrudRepository<Idea, Long> {

	List<Idea> findAll();

}