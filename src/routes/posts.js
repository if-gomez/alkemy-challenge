const {Router} = require('express');
const router = Router();
const postsMiddlewares = require('../middlewares/posts');
const postsController = require('../controllers/posts');

router.get('/', postsController.getAllPosts);

router.get('/:id', postsController.getPostById);

router.post('/', postsController.addPost);

router.patch('/:id', postsMiddlewares.findPostById, postsController.modifyPost);

router.delete('/', postsController.deleteAllPost);

router.delete('/:id',postsMiddlewares.findPostById, postsController.deleteById);

module.exports = router;