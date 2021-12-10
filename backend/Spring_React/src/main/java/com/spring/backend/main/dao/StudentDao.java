package com.spring.backend.main.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.backend.main.model.Student;

public interface StudentDao extends JpaRepository<Student, Long> {

}
