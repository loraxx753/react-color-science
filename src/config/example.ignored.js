export default () => {
  return {
    auth: {
      google: {
        web: {
          client_id: 's0meweirdstring.apps.googleusercontent.com',
          project_id: 'project-name',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://accounts.google.com/o/oauth2/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_secret: 'this-better-not-be-saved-ever',
          javascript_origins: ['http://localhost:3000']
        }
      }
    }
  }
}
