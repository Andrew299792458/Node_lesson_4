const axios = require("axios")
const { API_URL } = require("../constants/index")

exports.getPosts = async (req, res) => {
    try {
        const posts = await axios.get(`${API_URL}/posts`)
        console.log(posts.data)
        res.status(200).json({
            success: true,
            data: posts.data,
            status: 200,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "faq",
            data: null
        })
    }
}

exports.getPost = async (req, res) => {
    const { id } = req.params
    try {
        const post = await axios.get(`${API_URL}/posts/${id}`)
        console.log(post.data)
        res.status(200).json({
            success: true,
            data: post.data,
            status: 200,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "faq",
            data: null
        })
    }
}

exports.getPostComments = async (req, res) => {
    const { id } = req.params
    try {
        const comments = await axios.get(`${API_URL}/posts/${id}/comments`)
        console.log(comments.data)
        res.status(200).json({
            success: true,
            data: comments.data,
            status: 200,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "faq",
            data: null
        })
    }
}