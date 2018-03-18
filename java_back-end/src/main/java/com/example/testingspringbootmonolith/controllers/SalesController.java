package com.example.testingspringbootmonolith.controllers;

import com.example.testingspringbootmonolith.models.Sale;
import com.example.testingspringbootmonolith.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class SalesController {

	@Autowired
	private SaleRepository saleRepository;

	@GetMapping("/sales")
	public Iterable<Sale> findAllSales() {
		return saleRepository.findAll();
	}

	@GetMapping("/sales/{saleId}")
	public Optional<Sale> findSaleById(@PathVariable Long saleId) {
		return saleRepository.findById(saleId);
	}

	@DeleteMapping("/sales/{saleId}")
	public HttpStatus deleteSaleById(@PathVariable Long saleId) {
		saleRepository.deleteById(saleId);
		return HttpStatus.OK;
	}

	@PostMapping("/sales")
	public Sale createNewSale(@RequestBody Sale newSale) {
		return saleRepository.save(newSale);
	}

	@PatchMapping("/sales/{saleId}")
	public Sale updateSaleById(@PathVariable Long saleId, @RequestBody Sale saleRequest) {

		Sale saleFromDb = saleRepository.findById(saleId).get();

        saleFromDb.setId(saleRequest.getId());
		saleFromDb.setBuyer(saleRequest.getBuyer());
		saleFromDb.setPrice(saleRequest.getPrice());
		saleFromDb.setCraft(saleRequest.getCraft());
		saleFromDb.setDate(saleRequest.getDate());

		return saleRepository.save(saleFromDb);
	}

}