#!/bin/python3

# https://www.hackerrank.com/challenges/30-sorting

import sys

class Sort:
    'class for sorting algorithms'
    
    def __init__(self):
        pass
        
    def bubbleSort(self, array):      
        rangeValue = len(array)-1
        totalSwaps = 0
        swapOccured = True      
        while rangeValue > 0 and swapOccured:
            swapOccured = False
            for i in range(rangeValue):
                if(array[i] > array[i+1]):
                    'swap values'
                    swapOccured = True
                    totalSwaps += 1
                    temp = array[i]
                    array[i] = array[i+1]
                    array[i+1] = temp
            rangeValue -= 1; 
        print("Array is sorted in " + str(totalSwaps) + " swaps.")
        return array
    
'end Sort class'    
 
n = int(input().strip())
a = [int(a_temp) for a_temp in input().strip().split(' ')]

sort = Sort()
sortedArray = sort.bubbleSort(a)
print("First Element: " + str(sortedArray[0]))
print("Last Element: " + str(sortedArray[len(sortedArray)-1]))