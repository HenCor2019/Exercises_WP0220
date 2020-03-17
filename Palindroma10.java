	//Ejercicio02: verificar si una cadena de texto es palindroma
package com.HACA.x00095119;
 
import java.util.Scanner;
 
public class Main {
 
    public static void main(String[] args) {
	 Scanner in= new Scanner(System.in);
	 System.out.print("Ingresar una cadena: ");
	 String word= in.nextLine();
	 word=word.replace(" ","");//Removing blanks
	 word=word.toLowerCase(); // lowercase the word
     String auxWord="";
     for(int i=1;i<=word.length();i++)
         auxWord +=word.charAt(word.length()-i); // I invert the word into aux var
     System.out.println("Si sale true es palindroma,de lo contrario no " +word.equalsIgnoreCase(auxWord));
 
 
    }
}