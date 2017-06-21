import tweepy
CONSUMER_KEY = 'o0pSmRAFM6ndb8wNUyH6bcgEO'
CONSUMER_SECRET = 'hfctGsJOTfRqyuGSxTGHJfNAZXttklto2trKy184XUQ2RnKdG0'
ACCESS_TOKEN_KEY= '2905925147-IXf5uwpF3qRSRv0uzAILuA05Wl6SnktNZXd3OxP'
ACCESS_TOKEN_SECRET= 'dTtTCpVfJ7pKG9tZ1DRYCXrQR6lRWO0vGEkPcJoLqENH0'

def tweet(status):
    '''
    updates the status of my twitter account
    requires tweepy (https://github.com/joshthecoder/tweepy)
    '''
    if len(status) > 140:
        raise Exception('status message is too long!')
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET)
    api = tweepy.API(auth)
    result = api.update_status(status)
    return result