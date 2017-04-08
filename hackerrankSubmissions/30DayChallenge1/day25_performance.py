""" 
https://www.hackerrank.com/challenges/30-running-time-and-complexity 
"""

import math

class Numbers:
    def __init__(self):
        pass

    def isPrime(self, n):
        #handling 1 and even numbers
        if n<2 or (n%2==0 and n!=2):
            return "Not prime"
        elif n==2:
            return "Prime"
        #handling odd numbers
        else:
            x=2
            #any x above square root of n cannot be divisor
            while x<=math.sqrt(n):
                if(n%x==0):
                    return "Not prime"
                x+=1
            return "Prime"

if __name__ == "__main__":
    T=int(input())
    while(T>0):
        print(Numbers().isPrime(int(input())))
        T-=1   