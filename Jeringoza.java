/*

*Created by: HenCor2019
*Version: 1.0
*Created on March 17

*/
package com.HACA.x00095119;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		System.out.print("Ingresa una palabra: ");
		String JerinWord=in.nextLine();
		 JerinWord=JerinWord.replace("a","apa");		 JerinWord=JerinWord.replace("e","epe");		 JerinWord=JerinWord.replace("i","ipi");		 JerinWord=JerinWord.replace("o","opo");		 JerinWord=JerinWord.replace("u","upu");
		 System.out.print("Tu palabra en Jeringoza es: "+ JerinWord);
	}
}