/*
* Created by: Cortez Amaya Henry Alexander
* Version: 1.0
* Created on March 5
 */
package com.HACA.x00095119;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        boolean flag = true;
        int auxNumber=0, numMax=-1000,numMin=0,sumPos=0,sumNeg=0;
        while(flag){
            System.out.print("Ingrese un numero o -1 para salir: ");
            auxNumber=in.nextInt(); in.nextLine();
            if(auxNumber==-1)
                flag=!flag;
            else
                numbers.add(auxNumber);
        }
        for(int i=0;i<numbers.size();i++) {
            auxNumber+=numbers.get(i);
            if(numMax<numbers.get(i))
                numMax=numbers.get(i);
            if(numMax>numbers.get(i))
                numMin=numbers.get(i);
            if(numbers.get(i)<0)
                sumNeg+=numbers.get(i);
            else
                sumPos+=numbers.get(i);

        }
        System.out.println("La suma de todos los numeros es: "+auxNumber);
        System.out.println("El numero mayor es: "+ numMax);
        System.out.println("El numero menor es: "+numMin);
        System.out.println("La suma de negativos es: "+sumNeg);
        System.out.println("La suma de positivos es: "+sumPos);
        System.out.println("El promedio es: "+auxNumber/numbers.size());

    }
}
