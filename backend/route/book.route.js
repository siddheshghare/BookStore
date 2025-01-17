import express, { Router } from "express"
import { getBook } from "../controller/book.controller.js"

const router=Router()

router.route("/").get(getBook)


export default router