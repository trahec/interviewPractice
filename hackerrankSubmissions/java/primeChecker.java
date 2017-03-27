/*
* https://www.hackerrank.com/challenges/prime-checker
*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.lang.reflect.*;

//start custom code
import static java.lang.System.in;

class Prime{
    
    public void checkPrime(int... inputs){//2,3,5
        String result = "";
        for(int num: inputs){            
            if(isPrime(num)){
                result += num + " ";
            } 
        }
        System.out.println(result);
    }
   
    private boolean isPrime(int num){
        if(num!=1){
           for(int y=2; y<num; y++){
                if(num%y==0){
                    return false;
                }
            } 
            return true; 
        }
        return false; 
    }
}
//end custom code

public class Solution {

	public static void main(String[] args) {
		try{
		BufferedReader br=new BufferedReader(new InputStreamReader(in));
		int n1=Integer.parseInt(br.readLine());
		int n2=Integer.parseInt(br.readLine());
		int n3=Integer.parseInt(br.readLine());
		int n4=Integer.parseInt(br.readLine());
		int n5=Integer.parseInt(br.readLine());
		Prime ob=new Prime();
		ob.checkPrime(n1);
		ob.checkPrime(n1,n2);
		ob.checkPrime(n1,n2,n3);
		ob.checkPrime(n1,n2,n3,n4,n5);	
		Method[] methods=Prime.class.getDeclaredMethods();
		Set<String> set=new HashSet<>();
		boolean overload=false;
		for(int i=0;i<methods.length;i++)
		{
			if(set.contains(methods[i].getName()))
			{
				overload=true;
				break;
			}
			set.add(methods[i].getName());
			
		}
		if(overload)
		{
			throw new Exception("Overloading not allowed");
		}
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
	
}