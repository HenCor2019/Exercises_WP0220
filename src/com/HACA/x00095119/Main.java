//Ejercicio01: Secuencia de los numeros de fibonacci
package com.HACA.x00095119;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	Scanner in = new Scanner(System.in);
        System.out.print("Ingrese el maximo de la sucesion: ");
        int max= in.nextInt(); in.nextLine();
        int first=0, second=1,fibonacciN=0; //Aux var
        for(int i=0;i<max;i++) {
            fibonacciN = first + second; //Fibonacci number definition
            System.out.print(" "+ fibonacciN +" ");
            first=second;
            second=fibonacciN;
        }
    }
}
