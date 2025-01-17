import{Router} from "express"
import { login, signup } from "../controller/user.controller.js"
 
const router=Router()

router.route("/signUp").post(signup)
router.route("/login").post(login)

export  default router