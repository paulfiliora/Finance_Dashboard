package com.example.testingspringbootmonolith.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "MONTHLYREVENUE")
public class MonthlyRevenue {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "REVENUE")
	private Integer revenue;

	@Column(name = "COST")
	private Integer cost;

}