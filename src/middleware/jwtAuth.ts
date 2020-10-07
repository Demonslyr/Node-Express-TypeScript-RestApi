import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
export const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://my.authority.url/.well-known/openid-configuration/jwks`
    }),

    // Validate the audience and the issuer.
    audience: 'MyScope',
    issuer: `https://my.authority.url`,
    algorithms: ['RS256']
  });