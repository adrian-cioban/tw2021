const Employee = require("../models/employee");

const router = require("express").Router();

router
  .route("/employees")
  .get(async (req, res) => {
    try {
      const employees = await Employee.findAll();
      return res.status(200).json(employees);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      const newEmployee = await Employee.create(req.body);
      return res.status(200).json(newEmployee);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

module.exports = router;
