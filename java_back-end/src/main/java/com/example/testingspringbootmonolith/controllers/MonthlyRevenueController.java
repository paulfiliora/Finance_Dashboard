package com.example.testingspringbootmonolith.controllers;

import com.example.testingspringbootmonolith.models.MonthlyRevenue;
import com.example.testingspringbootmonolith.repositories.MonthlyRevenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class MonthlyRevenueController {

	@Autowired
	private MonthlyRevenueRepository monthlyRevenueRepository;

	@GetMapping("/monthlyRevenues")
	public Iterable<MonthlyRevenue> findAllMonthlyRevenues() {
		return monthlyRevenueRepository.findAll();
	}

	@GetMapping("/monthlyRevenues/{monthlyRevenueId}")
	public Optional<MonthlyRevenue> findMonthlyRevenueById(@PathVariable Long monthlyRevenueId) {
		return monthlyRevenueRepository.findById(monthlyRevenueId);
	}

	@DeleteMapping("/monthlyRevenues/{monthlyRevenueId}")
	public HttpStatus deleteMonthlyRevenueById(@PathVariable Long monthlyRevenueId) {
		monthlyRevenueRepository.deleteById(monthlyRevenueId);
		return HttpStatus.OK;
	}

	@PostMapping("/monthlyRevenues")
	public MonthlyRevenue createNewMonthlyRevenue(@RequestBody MonthlyRevenue newMonthlyRevenue) {
		return monthlyRevenueRepository.save(newMonthlyRevenue);
	}

	@PatchMapping("/monthlyRevenues/{monthlyRevenueId}")
	public MonthlyRevenue updateMonthlyRevenueById(@PathVariable Long monthlyRevenueId, @RequestBody MonthlyRevenue saleRequest) {

		MonthlyRevenue monthlyRevenueFromDb = monthlyRevenueRepository.findById(monthlyRevenueId).get();

        monthlyRevenueFromDb.setId(saleRequest.getId());
        monthlyRevenueFromDb.setRevenue(saleRequest.getRevenue());
        monthlyRevenueFromDb.setCost(saleRequest.getCost());

		return monthlyRevenueRepository.save(monthlyRevenueFromDb);
	}

}