package com.blog.app.entities;

import java.util.Date;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "users")
@Getter
@Setter
@RequiredArgsConstructor
@NoArgsConstructor
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @NonNull
    @Column(name = "first_name")
    private String firstName;

    @NonNull
    @Column(name = "last_name")
    private String lastName;

    @NonNull
    @Column(name = "profile_name", nullable = false, unique = true)
    private String profileName;

    @Column(name = "created_at")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;

    @NonNull
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    @NonNull
    private String password;



    // @Past(message = "Date of birth must be in the past")
    // @DateTimeFormat(pattern = "yyyy-MM-dd")
    // @Age(message = "Must be at least 18 years old.")
    // private Date dateOfBirth;


    // public User(String id, String firstName, String lastName, String profileName, Date signDate, String email, String password) { //Date dateOfBirth
    //     this.id = id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.profileName = profileName;
    //     this.signDate = signDate;
    //     this.email = email;
    //     this.password = password;
    //   //this.dateOfBirth = dateOfBirth;
    // }

    // public UserEntity() {
    // }

    // public int getId() {
    //     return this.id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    // public String getFirstName() {
    //     return this.firstName;
    // }

    // public void setFirstName(String firstName) {
    //     this.firstName = firstName;
    // }

    // public String getLastName() {
    //     return this.lastName;
    // }

    // public void setLastName(String lastName) {
    //     this.lastName = lastName;
    // }

    // public String getprofileName() {
    //     return this.profileName;
    // }

    // public void setProfileName(String profileName) {
    //     this.profileName = profileName;
    // }

    // public Date getSignDate() {
    //     return this.signDate;
    // }

    // public void setSignDate(Date signDate) {
    //     this.signDate = signDate;
    // }

    // public String getEmail() {
    //     return this.email;
    // }

    // public void setEmail(String email) {
    //     this.email = email;
    // }

    // public String getPassword() {
    //     return this.password;
    // }

    // public void setPassword(String password) {
    //     this.password = password;
    // }

    // public Date getDateOfBirth() {
    //     return this.dateOfBirth;
    // }

    // public void setDateOfBirth(Date dateOfBirth) {
    //     this.dateOfBirth = dateOfBirth;
    // }

}
