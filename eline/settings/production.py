from settings.staging import *


# Allowed hosts for the site
ALLOWED_HOSTS = ['accounts.ms45.edu.ru']

# Static site url, used when we need absolute url but lack request object, e.g. in email sending.
SITE_URL = 'https://accounts.ms45.edu.ru'

EMAIL_HOST_PASSWORD = 'TODO (api key)'

RAVEN_BACKEND_DSN = 'https://TODO:TODO@sentry.thorgate.eu/TODO'
RAVEN_PUBLIC_DSN = 'https://TODO@sentry.thorgate.eu/TODO'
RAVEN_CONFIG['dsn'] = RAVEN_BACKEND_DSN
