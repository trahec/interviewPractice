/*
* https://www.hackerrank.com/challenges/30-exceptions-string-to-integer
*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String S = in.next();
        printInt(S);
    }
    
    private static void printInt(String string){
        try{
            System.out.print(Integer.parseInt(string));
        }
        catch(NumberFormatException nfe){
            System.out.print("Bad String");
        }  
    }   
}