#!/bin/python3
"""
https://www.hackerrank.com/contests/w31/challenges/beautiful-word
"""

import sys

def isBeautiful(w):
    w_list = list(w)

    if(len(w_list) > 100):
        raise ValueError('Input word is larger than 100 characters')
    else:
        vowelSet = {"a", "e", "i", "o", "u", "y"}

        for index, element in enumerate(w_list):
            if index != len(w_list)-1:
                if element == w_list[index+1]:
                    print("No")
                    return
                elif element in vowelSet and w_list[index+1] in vowelSet:
                    print("No")
                    return

        print("Yes")   
        return

w = input().strip()
# Print 'Yes' if the word is beautiful or 'No' if it is not.
isBeautiful(w)