package com.spring.backend.main.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.backend.main.model.Student;
import com.spring.backend.main.service.StudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class StudentController {
	@Autowired
	private StudentService service;
	
	@GetMapping(path = "/home")
	public String home() {
		return "from home page";
	}
	@GetMapping(path = "/students")
	public ResponseEntity<List<Student>> getCourses() {
		List<Student> courses = service.getStudents();
		if(courses==null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.ok().body(courses);
	}
//	@GetMapping(path = "/students/{id}")
//	public ResponseEntity<Optional<Student>> getSingleCourse(@PathVariable("id") Long id) {
//		Student course = service.getStudent(id);
//		if(course==null) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//		}
//		return ResponseEntity.of(Optional.of(course));
//	}
	@GetMapping(path = "/students/{id}")
	public Optional<Student> getSingle(@PathVariable Long id) {
		return this.service.getStudent(id);
	}
	@PostMapping(path = "/students",consumes ="application/json")
	public ResponseEntity<Student> addCourses(@RequestBody Student course) {
		Student course2=null;
		try {
			course2 = service.addStudent(course);
			return ResponseEntity.ok().body(course2);
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	@PutMapping(path = "/students",consumes ="application/json")
	public ResponseEntity<Student> updateCourses(@RequestBody Student course) {
		try {
			Student updateCourse = service.updateStudent(course);
			return ResponseEntity.ok().body(updateCourse);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	@DeleteMapping(path = "/students/{id}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable("id") Long id){
		try {
			this.service.delete(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}
	
	

}
