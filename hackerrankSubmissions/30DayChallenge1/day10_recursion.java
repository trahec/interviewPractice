/*
* https://www.hackerrank.com/challenges/30-recursion
*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int result = factorial(n);
        System.out.println(result);
    }
    
    public static int factorial(int n){        
        //recursive case
        if(n>1){
            return n * factorial(n-1);
        }
        //base case n=1
        else{
            return n;  
        }
    }
}