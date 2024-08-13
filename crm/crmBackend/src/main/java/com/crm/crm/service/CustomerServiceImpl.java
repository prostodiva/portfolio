package com.crm.crm.service;

import com.crm.crm.Model.Customers;
import com.crm.crm.exceptions.ResourceNotFoundException;
import com.crm.crm.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Iterable<Customers> findAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customers saveCustomer(Customers customer) {
       return customerRepository.save(customer);
    }


    @Override
    public void updateCustomer(int id, Customers customers) {
        Customers updateCustomer = customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer now exist"));
        updateCustomer.setName(customers.getName());
        updateCustomer.setPassword(customers.getPassword());
        customerRepository.save(updateCustomer);
    }

    @Override
    public Optional<Customers> findById(int id) {
        return customerRepository.findById(id);
    }

        @Override
    public void delete(int id, Customers customer) {
        Customers customers = new Customers();
        customerRepository.deleteById(id);
    }
}
















