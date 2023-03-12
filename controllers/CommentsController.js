const axios = require("axios")
const { API_URL } = require("../constants/index")

exports.getComments = async (req, res) => {
    try {
        const comments = await axios.get(`${API_URL}/comments/`)
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

exports.getComment = async (req, res) => {
    const { id } = req.params
    try {
        const comment = await axios.get(`${API_URL}/comments/${id}`)
        console.log(comment.data)
        res.status(200).json({
            success: true,
            data: comment.data,
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