from settings.local import *


SEND_EMAILS = False

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'eline',
        'TEST': {
            'NAME': 'eline_test',
        },
    }
}

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
