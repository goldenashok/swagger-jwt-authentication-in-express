/**
 * @swagger
 * components:
 *   schemas:
 *     todoList:
 *       type: object
 *       required: true
 *         - id
 *         - name
 *         - access
 *       properties:
 *         id:
 *           type: string
 *           description: todo unique id
 *           example: 1
 *         name:
 *           type: string
 *           description: todo name
 *           example: Ashok Kumar
 *         access:
 *           type: boolean
 *           description: todo access levele
 *           example: true
 */

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Retrieve a list of todos.
 *     description: Retrieve a list of todos.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/todoList'
 */

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: create a list of todos.
 *     description: Retrieve a list of users from JSONPlaceholder.
 *     requestBody:
 *       description: request object for add data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/todoList'
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/todoList'
 */

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Retrieve todo.
 *     description: Retrieve a todos
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Retrieve a todos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/todoList'
 *       400:
 *         description: todo id required
 *         content:
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: todo id required
 *                   example: Todo id not found.
 */

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: update todo data.
 *     description: update todo data
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: request object for add data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/todoList'
 *     responses:
 *       200:
 *         description: A list of employees.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/todoList'
 *       400:
 *         description: todo id required
 *         content:
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: todo id required
 *                   example: Todo id not found.
 */

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: dalete todo data.
 *     description: dalete todo data
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Delete the todo data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: todo deleted succesfully
 *                   example: todo deleted succesfully
 *       400:   
 *         description: todo id required
 *         content:
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: todo id required
 *                   example: Todo id not found.
 */