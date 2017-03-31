/*
*	https://www.hackerrank.com/challenges/30-more-exceptions
*/

import java.util.*;
import java.io.*;

//begin custom code
class Calculator{
    
    public int power(int n, int p) throws Exception{
        int result = n;     
        if(n<0 || p<0){
            throw new Exception("n and p should be non-negative");
        }
        else{
            while(p>1){
                result = result * n;
                p--;
            }
        }
        return result;
    } 
}
//end custom code

class Solution{

    public static void main(String[] args) {
    
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        while (t-- > 0) {
        
            int n = in.nextInt();
            int p = in.nextInt();
            Calculator myCalculator = new Calculator();
            try {
                int ans = myCalculator.power(n, p);
                System.out.println(ans);
            }
            catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
        in.close();
    }
}