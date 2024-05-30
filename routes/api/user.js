const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login using user name and generate jwt token.
 *     description: login using user name.
 *     requestBody:
 *       description: request object for login details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              required: true
 *              properties:
 *                username:
 *                  type: string
 *                  description: username for login
 *                  example: ashok
 *     responses:
 *       200:
 *         description: provide the jwt token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: using login name
 *                   example: eyJhbGciOiJIUzI1NiJ9.YXNob2s.mzogHLfP0Ev5cwQckosbR1AhJVS5paadUjstKEBEB0Q
 *       400:
 *         description: username not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: not found
 *                   example: username are required
 */
router.route('/').post(userController.loginUser);
/**
 * @swagger
 * /login/protect:
 *   get:
 *     summary: verify the user jwt tocken.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Retrieve the user details using token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  user:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        user:
 *                          type: string
 *                          description: user id
 *                          example: ashok
 *                        name:
 *                          type: string
 *                          description: user name
 *                          example: Ashok Kumar
 *       403:
 *         description: Forbidden message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Forbidden message
 *                   example: Access token not matched   
 */
router.route('/protect').get(userController.ensureToken, userController.productLoginUser);

module.exports = router;

