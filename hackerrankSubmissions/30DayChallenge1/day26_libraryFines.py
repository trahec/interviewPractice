"""
https://www.hackerrank.com/challenges/30-nested-logic
"""

from datetime import *

class Library:

    def __init__(self):
        pass

    def calculateFine(self, return_date, expected_date):
        if(return_date < expected_date):
            return 0
        if(return_date.year > expected_date.year):
            return 10000
        elif(return_date.month > expected_date.month):
            number_of_months_late = return_date.month - expected_date.month
            return 500*number_of_months_late
        else:
            number_of_days_late = return_date.day - expected_date.day
            return 15*number_of_days_late


if __name__ == "__main__":  
    ret_date_split = input().split( )
    exp_date_split = input().split( )    
    return_date = date(int(ret_date_split[2]), int(ret_date_split[1]), int(ret_date_split[0]))
    expected_date = date(int(exp_date_split[2]), int(exp_date_split[1]), int(exp_date_split[0]))

    print(Library().calculateFine(return_date, expected_date))      