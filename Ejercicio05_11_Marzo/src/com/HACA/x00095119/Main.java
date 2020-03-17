/*
* Creado por: Henry Alexander Cortez Amaya
* Version: 1.0
* Ejercicio 5: Solicitar n letras desde teclado al usuario, para guardarlas e imprimirlas.
*/
package com.HACA.x00095119;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner in= new Scanner(System.in);
        boolean flag=true;
        ArrayList<Character> vowels= new ArrayList<>();
        while(flag) {
            System.out.print("Ingresa un letra: ");
            char letter= in.next().charAt(0);
            switch (letter) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                case 'A':
                case 'E':
                case 'I':
                case 'O':
                case 'U':
                    vowels.add(letter);
                    break;
            }
            System.out.print("¿Deseas terminar? s/n");
            letter=in.next().charAt(0);
            flag=(letter=='s')?true:false; //End loop
        }

        Iterator iter= vowels.iterator();
        while(iter.hasNext()) //Print the vowels
            System.out.print(iter.next());
    }
}
