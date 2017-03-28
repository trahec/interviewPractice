/*
* https://www.hackerrank.com/challenges/java-md5
*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.security.MessageDigest;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);       
        try{
           encryptString(sc.nextLine());   
        }
        catch(Exception e){
            System.out.println(e);
        }           
    }
    
    private static void encryptString(String password) throws Exception {
        MessageDigest md = MessageDigest.getInstance("MD5"); 
        md.update(password.getBytes());
        byte[] digest = md.digest();        
        StringBuffer sb = new StringBuffer();
		for (byte b : digest) {
			sb.append(String.format("%02x", b & 0xff));
		}        
        System.out.println(sb.toString());      
    }
}