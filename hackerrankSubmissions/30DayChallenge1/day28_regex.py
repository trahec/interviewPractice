#!/bin/python3
"""
https://www.hackerrank.com/challenges/30-regex-patterns/
"""

import sys
import re
import unittest


class EmailHandling:

    def __init__(self):
        pass
    
    def isValidEmail(self, emailID):
        result = re.match(r"[^@]+@[^@]+\.[^@]+", emailID)
        if result is not None:
            return True
        else:
            return False
        
    def getEmailDomain(self, emailID):
        emailDomain = emailID.split('@')[1]
        return emailDomain


class Solution:
    
    def __init__(self):
        self.emailHandling = EmailHandling()
    
    def isGmailAddress(self, emailID):
        if self.emailHandling.isValidEmail(emailID) is False:
            return None
        else:
            emailDomain = self.emailHandling.getEmailDomain(emailID)
            result = re.match("gmail.com", emailDomain) 
            if(result != None): 
                return True


#tests
class Tests(unittest.TestCase):

    emailHandling = EmailHandling()
    solution = Solution()

    #test emailHandling class
    def test_invalid_email(self):
        emailID = "hi..@99@gmail.com"
        result = self.emailHandling.isValidEmail(emailID)
        self.assertFalse(result)

    def test_valid_email(self):
        emailID = "testuser@yahoo.com"
        result = self.emailHandling.isValidEmail(emailID)
        self.assertTrue(result)

    def test_email_domain_retriever(self):
        emailID = "testuser@yahoo.com"
        emailDomain = "yahoo.com"
        result = self.emailHandling.getEmailDomain(emailID)
        self.assertEqual(result, emailDomain)

    #test Solution class
    def test_get_gmail_address_isgmail(self):
        emailID = "testuser@gmail.com"
        result = self.solution.isGmailAddress(emailID)
        self.assertTrue(result)

    def test_get_gmail_address_notgmail(self):
        emailID = "testuser@yahoo.com"
        result = self.solution.isGmailAddress(emailID)
        self.assertEqual(result, None)

    def test_get_gmail_address_invalidmail(self):
        emailID = "hi..@99@gmail.com"
        result = self.solution.isGmailAddress(emailID)
        self.assertEqual(result, None)

#end tests

if __name__ == '__main__':
    N = int(input().strip())
    firstNameList = []
    for a0 in range(N):
        firstName,emailID = input().strip().split(' ')
        firstName,emailID = [str(firstName),str(emailID)]

        #if isGmailAddress, print firstName and emailID
        if(Solution().isGmailAddress(emailID) == True):
            firstNameList.append(firstName)

    firstNameList.sort()
    for name in firstNameList:
        print(name)

    unittest.main()   