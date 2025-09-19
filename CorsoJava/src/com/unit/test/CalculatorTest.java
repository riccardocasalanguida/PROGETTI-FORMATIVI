package com.unit.test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CalculatorTest {

	@Test
	void testAdd() {
		Calculator calc = new Calculator();
		assertEquals(5, calc.add(2, 3));
	}

	@Test
	void testSott() {
		Calculator calc = new Calculator();
		assertEquals(3, calc.sott(6, 3));
	}

	@Test
	void testMolt() {
		Calculator calc = new Calculator();
		assertEquals(6, calc.molt(2, 3));
	}

	@Test
	void testDiv() {
		Calculator calc = new Calculator();
		assertEquals(2, calc.div(6, 3));
	}
	
	@Test
	void testNotNull() {
		String str = "prova";
		assertNotNull(str);
	}
	
	@Test
	void testStringEquals() {
		String expected = "JUNIT";
		String actual = "JUNIT";
		assertEquals(expected,actual);
	}
	
	@Test
	void testSameObject() {
		String a = "JUNIT";
		String b = a;
		assertSame(a,b);
	}
	
	@Test
	void testNotSameObject() {
		String a = new String("JUNIT");
		String b = new String("JUNIT");
		assertNotSame(a,b);
	}
	
	@Test
	void testCondition() {
		assertTrue(5 > 2);
		assertFalse(2 > 5);
	}
	
	@Test
	void testThrowsExeption() {
		assertThrows(ArithmeticException.class, () -> {int x = 1 / 0;});
	}
	
	@Test
	void testArrayEquals() {
		int[] expected = {1,2,3,4};
		int[] actual = {1,2,3,4};
		assertArrayEquals(expected,actual);
	}
	
	@Test
	void testStringLength() {
		assertEquals(26,"ABCDEFGHIJKLMNOPQRSTUVWXYZ".length());
	}
	
	@Test
	void testDoubleCompare() {
		assertEquals(3.14,3.1415,0.01);
	}
	
	@Test
	void testareListaVuota() {
		List<Integer> lista = new ArrayList<>();
		assertTrue(lista.isEmpty());
		lista.add(Integer.valueOf(1));
		assertEquals(1, lista.size());
		assertFalse(lista.isEmpty());
	}
	
	@Test
	void testReturnNull() {
		String s = null; 
		assertNull(s);
	}
	
	@Test
	void testMultipleAssertions() {
		int a = 5;
		int b = 10;
		assertAll(() -> assertTrue(a < b), () -> assertEquals(15,a + b));	
	}
	
	@Test
	void testUpperCase() {
		assertEquals("BENVENUTO", "BENVENUTO".toUpperCase());	
	}
	
	
	
	
	
	
	
	
	
	
	
}
