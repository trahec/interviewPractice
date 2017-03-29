/*
* Given T seconds, return in <Hours>h<MinsmSecss
*/

class Solution {
    public String solution(int T) {
        // write your code in Java SE 8
        if(T > -1){
            int hours = T / 3600;
            int minutes = (T % 3600) / 60;
            int seconds = T % 60;
            System.out.println(hours + "h" + minutes + "m" + seconds + "s");
            return hours + "h" + minutes + "m" + seconds + "s";
        }
        else{
            throw new IllegalArgumentException();   
        }
    }
}