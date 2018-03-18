package com.example.testingspringbootmonolith.models;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "SALES")
public class Sale {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "BUYER")
	private String buyer;

	@Column(name = "PRICE")
	private String price;

	@Column(name = "CRAFT")
	private String craft;

	@Column(name = "DATE")
	private String date;

}