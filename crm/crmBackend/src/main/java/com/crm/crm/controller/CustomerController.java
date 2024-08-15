package com.crm.crm.controller;

import com.crm.crm.Model.Customers;
import com.crm.crm.exceptions.ResourceNotFoundException;
import com.crm.crm.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://127.0.0.1:5500/portfolio/crm")
//@CrossOrigin(origins = "http://127.0.0.1:5500") - works separate from the portfolio
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    //find all customers
    @GetMapping("/customers")
    public Iterable<Customers> findAllCustomers() {
        return customerService.findAllCustomers();
    }

    //find a customer using id
    @GetMapping("/customer/{id}")
    public Optional<Customers> findCustomerById(@PathVariable int id) {
       return customerService.findById(id);
    }

    //create a new customer
    @PostMapping("/customer")
    public Customers createNewCustomer(Customers customer) {
        return customerService.saveCustomer(customer);
    }

    //update a customer using id
    @PutMapping("/customer/{id}")
    public ResponseEntity<Customers> updateCustomer(@PathVariable int id, @RequestBody Customers customer) {
        customerService.updateCustomer(id, customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //delete a customer using id
    @DeleteMapping("/customer/{id}")
    public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable int id) {
        Customers customers = customerService.findById(id)
                        .orElseThrow(() -> new ResourceNotFoundException("Not exist"));
        customerService.delete(id, customers);
        return ResponseEntity.ok(HttpStatus.NO_CONTENT);
    }


}















