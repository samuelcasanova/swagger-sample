/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       required:
 *       - createdDate
 *       - description
 *       - dueDate
 *       - id
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: 748e7d67-620b-4a2f-b7e6-c5a4c2e60758
 *         description:
 *           type: string
 *           example: Laundry
 *         createdDate:
 *           type: string
 *           format: date-time
 *           example: 2016-08-29T09:12:33.001Z
 *         dueDate:
 *           type: string
 *           format: date-time
 *           example: 2016-08-29T09:12:33.001Z
 */
export class Task {
  public constructor (
    public id: string,
    public description: string,
    public createdDate: Date,
    public dueDate: Date
  ) {}
}
