/*
* https://www.hackerrank.com/challenges/30-binary-numbers
*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        String binaryString = getBinary(n);
        System.out.println(getConsecutiveCount(binaryString));
    }
    
    public static String getBinary(int n){
        StringBuilder result = new StringBuilder();
        while(n > 0) {            
            int res = n % 2;                        
            n = n / 2;
            result.append(Integer.toString(res));
        }
        return result.reverse().toString();
    }
    
    public static int getConsecutiveCount(String string){
        String[] stringArray = string.split("");
        int count = 0;
        int temp_count = 0;     
        for (int loop = 1; loop < stringArray.length; loop++) {         
            int value = Integer.parseInt(stringArray[loop]);          
            if(value == 1){
                temp_count++;                
            }
            else{
                temp_count = 0;
            }
            
            if(temp_count > count){               
                count = temp_count;
            }
        } 
        return count;
    }     
}