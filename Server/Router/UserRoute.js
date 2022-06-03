const express = require("express")

const router = express.Router();

const { createUser, getUser, getUsers, updateUser, deleteUser, signUser } = require('../Controlla/userControl')

router
    .route("/")
    .post(createUser)
    .get(getUsers)

    router
        .route("/:id")
        .get(getUser)
        .patch(updateUser)
        .delete(deleteUser)

    router
        .route('/signin')
        .post(signUser)

        module.exports = router