/*
* Return sum of all two-digit ints in an array
*/

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        if(A==null){
           throw new IllegalArgumentException(); 
        }
       
        int sum = 0;
        for(int value: A){
            if(hasTwoDigits(value)){
                sum += value;
            }                
        }
        return sum;
    }
    
    private boolean hasTwoDigits(int num){
        return (num>9 && num<100) || (num<-9 && num>-100);
    }
}