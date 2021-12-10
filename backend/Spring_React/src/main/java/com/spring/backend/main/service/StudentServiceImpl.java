package com.spring.backend.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.backend.main.dao.StudentDao;
import com.spring.backend.main.model.Student;
@Service
public class StudentServiceImpl implements StudentService{
	@Autowired
	private StudentDao dao;

	@Override
	public List<Student> getStudents() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Optional<Student> getStudent(Long id) {
		// TODO Auto-generated method stub
		Optional<Student> byId = dao.findById(id);
		return byId;
	}

	@Override
	public Student addStudent(Student student) {
		// TODO Auto-generated method stub
		return dao.save(student);
	}

	@Override
	public Student updateStudent(Student student) {
		// TODO Auto-generated method stub
		return dao.save(student);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

}
