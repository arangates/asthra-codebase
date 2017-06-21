import httplib, urllib
import random
from time import localtime, strftime
from temboo.Library.Twitter.Tweets import StatusesUpdate
from temboo.core.session import TembooSession
import psutil
import time
time= strftime("%a, %d %b %Y %H:%M:%S", localtime())
n= 001
l="shooting the no."
m=" tweet @ ============>    "
t= '%s%d%s%s' % (l,n,m,time)
def doit():
                                        a=random.randint(1, 100000)
                                        b= random.randint(100, 20000)
                                        c= random.randint(300, 50077)
                                        d= random.randint(60, 100089)
                                        e= random.randint(500, 1070045)
                                        f= random.randint(560, 670560)
                                        g= random.randint(5090, 10000)
                                        h= random.randint(800, 2208)
                                        params = urllib.urlencode({'field1': a ,'field2': b,'field3': c ,'field4': d,'field5': e ,'field6': f,'field7': g ,'field8': h,'key':'ETWI0YZCDOHZA6BN'})
                                        headers = {"Content-type": "application/x-www-form-urlencoded","Accept": "text/plain"}
                                        conn = httplib.HTTPConnection("api.thingspeak.com:80")
while n>0 and n<100:
               n=n+1
               try:
                                                conn.request("POST", "/update", params, headers)
                                                response = conn.getresponse()
                                                print a
                                                print b
                                                print c
                                                print d
                                                print e
                                                print f
                                                print g
                                                print h
                                                #print strftime("%a, %d %b %Y %H:%M:%S", localtime())
                                                print response.status, response.reason
                                                data = response.read()
                                                conn.close()
                                             except:
                                                print "connection failed"
                                                   
                        
                         
           
                         
                                                         
def makeit():
                 # Create a session with your Temboo account details
                session = TembooSession("aranganathan", "myFirstApp", "b120edd9cf28431f873ecf95bcae03e1")

                # Instantiate the Choreo
                statusesUpdateChoreo = StatusesUpdate(session)

                # Get an InputSet object for the Choreo
                statusesUpdateInputs = statusesUpdateChoreo.new_input_set()

                # Set the Choreo inputs
                statusesUpdateInputs.set_AccessToken("2905925147-IXf5uwpF3qRSRv0uzAILuA05Wl6SnktNZXd3OxP")
                statusesUpdateInputs.set_AccessTokenSecret("dTtTCpVfJ7pKG9tZ1DRYCXrQR6lRWO0vGEkPcJoLqENH0")
                statusesUpdateInputs.set_ConsumerSecret("hfctGsJOTfRqyuGSxTGHJfNAZXttklto2trKy184XUQ2RnKdG0")
                statusesUpdateInputs.set_StatusUpdate(t)
                statusesUpdateInputs.set_ConsumerKey("o0pSmRAFM6ndb8wNUyH6bcgEO")

                # Execute the Choreo
                statusesUpdateResults = statusesUpdateChoreo.execute_with_results(statusesUpdateInputs)

                # Print the Choreo outputs
                print("Response: " + statusesUpdateResults.get_Response())

#sleep for 16 seconds (api limit of 15 secs)
if __name__ == "__main__":
	while True:
		doit()
		makeit()
		time.sleep(16) 

