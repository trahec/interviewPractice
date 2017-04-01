/*
* https://www.hackerrank.com/challenges/30-queues-stacks
*/

import java.io.*;
import java.util.*;

public class Solution {
//start custom code
    private Stack<Character> stack = new Stack<Character>();
    private LinkedList<Character> queue = new LinkedList<Character>();
    
    //stack methods
    public void pushCharacter(char c){
        Character character = new Character(c);
        stack.push(character);
    }
    public char popCharacter(){
        return stack.pop().charValue();
    } 
    
    //queue methods
    public void enqueueCharacter(char c){
        Character character = new Character(c);
        queue.add(character);  
    }
    public char dequeueCharacter(){
        return queue.pollFirst().charValue();
    }
//end custom code
	
	public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();
        scan.close();

        // Convert input String to an array of characters:
        char[] s = input.toCharArray();

        // Create a Solution object:
        Solution p = new Solution();

        // Enqueue/Push all chars to their respective data structures:
        for (char c : s) {
            p.pushCharacter(c);
            p.enqueueCharacter(c);
        }

        // Pop/Dequeue the chars at the head of both data structures and compare them:
        boolean isPalindrome = true;
        for (int i = 0; i < s.length/2; i++) {
            if (p.popCharacter() != p.dequeueCharacter()) {
                isPalindrome = false;                
                break;
            }
        }

        //Finally, print whether string s is palindrome or not.
        System.out.println( "The word, " + input + ", is " 
                           + ( (!isPalindrome) ? "not a palindrome." : "a palindrome." ) );
    }
}