package com.crm.crm.service;

import com.crm.crm.Model.Customers;

import java.util.Optional;

public interface CustomerService {

    Iterable<Customers> findAllCustomers();
    Customers saveCustomer(Customers customer);
    void updateCustomer(int id, Customers customer);
    Optional<Customers> findById(int id);
    void delete(int id, Customers customers);


}














