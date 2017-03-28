/*
* https://www.hackerrank.com/challenges/30-scope
*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

class Difference {

  	private int[] elements;
  	public int maximumDifference;
	// Add your code here

    public Difference(int[] input){
        this.elements = input;         
    }

    public void computeDifference(){
        int tempDifference = 0;
        int arrayLength = elements.length; 
        
        for(int x=0; x<arrayLength; x++){
            for(int y=x; y<arrayLength; y++){
                tempDifference = Math.abs(elements[x] - elements[y]);
                if(tempDifference > maximumDifference){
                    maximumDifference = tempDifference;
                }
            }
        }
    } 
    //End of your code
	
}// End of Difference class

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        sc.close();

        Difference difference = new Difference(a);

        difference.computeDifference();

        System.out.print(difference.maximumDifference);
    }
}