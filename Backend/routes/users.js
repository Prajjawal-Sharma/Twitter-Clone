const express=require('express')
const { authorization } = require('../middlewares/authorization')
const router=express.Router()
const {getUserData,followUser, unfollowUser,myFollowing}=require('../controllers/userController')

router.get('/myfollowing/post',authorization,myFollowing)
router.get('/:userId',authorization,getUserData)
router.patch('/follow',authorization,followUser)
router.patch('/unfollow',authorization,unfollowUser)

module.exports=router