const axios = require("axios")
const { API_URL } = require("../constants/index")

exports.getUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await axios.get(`${API_URL}/users/${id}`)
        console.log(user.data)
        res.status(200).json({
            success: true,
            data: user.data,
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

exports.getUsers = async (req, res) => {
    try {
        const users = await axios.get(`${API_URL}/users`)
        console.log(users.data)
        res.status(200).json({
            success: true,
            data: users.data,
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

exports.getUserPosts = async (req, res) => {
    const { id } = req.params
    try {
        const posts = await axios.get(`${API_URL}/users/${id}/posts`)
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