const express = require('express');
const router = express.Router();
const employeeController = require('../../controllers/employeesController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required: true
 *         - id
 *         - firstname
 *         - lastname
 *       properties:
 *         id:
 *           type: string
 *           description: Employee unique id
 *           example: 1
 *         firstname:
 *           type: string
 *           description: Employee First name
 *           example: Ashok Kumar
 *         lastname:
 *           type: string
 *           description: Employee Last name
 *           example: D
 *     EmployeePost:
 *       type: object
 *       required: true
 *         - firstname
 *         - lastname
 *       properties:
 *         firstname:
 *           type: string
 *           description: Employee firstname
 *           example: Ajay
 *         lastname:
 *           type: string
 *           description: Employee lastname
 *           example: B
 */

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Retrieve a list of employees.
 *     description: Retrieve a list of employees
 *     responses:
 *       200:
 *         description: A list of employees.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
router.route('/').get(employeeController.getAllEmployees);
/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Retrieve a list of employees
 *     requestBody:
 *       description: request object for add data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmployeePost'    
 *     responses:
 *       200:
 *         description: A list of employees.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *       400:
 *         description: firstname and lastname required
 *         content:
 *           application/json:
 *             schema: 
 *               type: object
 *               items:
 *                 message:
 *                   type: string
 *                   description: firstname and lastname required
 *                   example: First and last names are required.
 */
router.route('/').post(employeeController.createNewEmployee);
/**
 * @swagger
 * /employees:
 *  put:
 *    summary: Update employees detail
 *    requestBody:
 *      description: Update employees detail
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schemas/Employee'
 *    responses:
 *      200:
 *        description: New Employee data
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Employee'
 *      400:
 *        description: firstname and lastname required
 *        content:
 *          application/json:
 *            schema: 
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: firstname and lastname required
 *                  example: Employee id not found.
 */
router.route('/').put(employeeController.updateEmployee);
/**
 * @swagger
 * /employees:
 *  delete:
 *    summary: Delete employee detail
 *    requestBody:
 *      description: Delete employee detail
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *               id:
 *                 type: integer
 *                 description: Employee unique id
 *                 example: 1
 *    responses:
 *      200:
 *         description: Employee data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *      400:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: not found message
 *                   example: Employee ID 3 not found
 */
router.route('/').delete(employeeController.deleteEmployee);

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Retrieve a list of employees.
 *     description: Retrieve a list of employees
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of employees.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *       400:
 *         description: firstname and lastname required
 *         content:
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: firstname and lastname required
 *                   example: Employee id not found.
 */
router.route('/:id').get(employeeController.getEmployee);

module.exports = router;