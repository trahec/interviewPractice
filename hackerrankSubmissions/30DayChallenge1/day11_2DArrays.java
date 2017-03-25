/*
* https://www.hackerrank.com/challenges/30-2d-arrays
*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int arr[][] = new int[6][6];
        for(int i=0; i < 6; i++){
            for(int j=0; j < 6; j++){
                arr[i][j] = in.nextInt();
            }
        }
        System.out.println(getMaxHourglassSum(arr));
    }
        
    public static int getMaxHourglassSum(int[][] array){
        int rowLimit = 4;
        int colLimit = 4;
        int maxHourglassSum = 0;
        int currentHourglassSum = 0;
        
        for(int i = 0; i < rowLimit; i++) { // looping each row            
            for(int j = 0; j < colLimit; j++) { // looping each col                  
                currentHourglassSum = array[i][j] + array[i][j+1] + array[i][j+2] 
                                                  + array[i+1][j+1] 
                                  + array[i+2][j] + array[i+2][j+1] + array[i+2][j+2]; 

                if(currentHourglassSum > maxHourglassSum){
                    maxHourglassSum = currentHourglassSum;
                }
            }   
        }
        return maxHourglassSum;
    }
}
