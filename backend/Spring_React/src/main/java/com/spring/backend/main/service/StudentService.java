package com.spring.backend.main.service;

import java.util.List;
import java.util.Optional;

import com.spring.backend.main.model.Student;

public interface StudentService {
	public List<Student> getStudents();
	public Optional<Student> getStudent(Long id);
	public Student addStudent(Student student);
	public Student updateStudent(Student student);
	public void delete(Long id);
}
