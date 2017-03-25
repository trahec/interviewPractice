/*
* Equilibrium index of an array
*/

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8       
        int arrayLength = A.length;
        //loop through array
        for(int currentIndex = 0; currentIndex < arrayLength; currentIndex++){
            int leftSum = 0;
            int rightSum = 0;           
            //get sum to the left of currentIndex
            for(int leftIndex = 0; leftIndex < currentIndex; leftIndex++){
                
                leftSum += A[leftIndex];   
            }        
            //get sum to the right of currentIndex
            for(int rightIndex = currentIndex+1; rightIndex < arrayLength; rightIndex++){
                rightSum += A[rightIndex];   
            }           
            //check if equilibrium exists 
            if(leftSum == rightSum){
                return currentIndex;   
            }
        }    
        return -1;
    }
}